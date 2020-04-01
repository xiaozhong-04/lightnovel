// 创建路由
const router = require("express").Router()
// 导入jwt
const jwt = require("../jwt")
// 导入md5
const md5 = require("md5")
const { md5_key } = require("../confing")
// 导入数据库
const conn = require("../db")

// 获取阿里短信SDK
const SMSClient = require('@alicloud/sms-sdk')
// 接口名称
const apiName = 'users'

// 登录
router.post("/login", (req, res) => {
    let phone = req.body.phone;
    let password = req.body.password;
    console.log(phone);
    let sql = `SELECT * FROM users WHERE phone = ?`
    conn.query(sql, [phone], (error, results) => {
        if (error) return console.log(error.message);

        if (results[0]) {
            if (md5(password + md5_key) == results[0].password) {
                let data = {
                    id: results[0].id,
                    username: results[0].username
                }
                res.json({
                    "state": 200,
                    "token": jwt.makeJWT(data),
                    "data": {
                        "id": results[0].id,
                        "username": results[0].username,
                        "phone": results[0].phone,
                        "coin": results[0].book_coin,
                        "avatar": results[0].avatar
                    }
                })
            } else {
                res.json({
                    "state": 400,
                    "error": "密码错误,请重新输入!"
                })
            }
        } else {
            res.json({
                "state": 400,
                "error": "未找到该用户！"
            })
        }
    })
})

// 获取手机验证码
router.post('/getPhoneVerifyCode', (req, res) => {
    const phoneNumber = req.body.phone
    const accessKeyId = 'LTAI4FfysfG5Jq7B5iWXdgH1'
    const secretAccessKey = 'IJPh6gujXG5Y131NeeEbiVTYK26vGi'
    //初始化sms_client
    const smsClient = new SMSClient({ accessKeyId, secretAccessKey })
    if (!phoneNumber) {
        return res.json({
            "state": 400,
            "error": "手机号不能为空"
        })
    } else {
        // 生成短信验证码
        var Num = "";
        for (var i = 0; i < 6; i++) {
            Num += Math.floor(Math.random() * 10);
        }

        if (phoneNumber) {
            // 查询用户注册是否已存在
            conn.query("SELECT * FROM `users` WHERE phone = ?", phoneNumber, (error, results, fields) => {
                if (error) return console.log(error.message)
                if (results.length != 0) {
                    res.json({
                        "state": 400,
                        "error": "手机号已存在,请重新输入!"
                    })
                    return
                } else {
                    // 存入数据库
                    let sql = "INSERT INTO codes(phone,verifyCode) VALUES(?,?)"
                    conn.query(sql, [phoneNumber, Num], (error, results, fields) => {
                        if (error) return console.log(error.message)
                        res.json({
                            "state": 200
                        })
                    })
                }
            })
        }
        // 发送短信
        smsClient.sendSMS({
            PhoneNumbers: phoneNumber,
            SignName: '传智Fullstack5',
            TemplateCode: 'SMS_175572112', // SMS_17557211211
            TemplateParam: '{"code":"' + Num + '"}',
        }).then(function (res) {
            let {Code}=res
            if (Code === 'OK') {
                //处理返回参数
                console.log(res)
            }
        }, function (err) {
            console.log(err)
        })
    }
})


// 注册用户
router.post(`/${apiName}`, (req, res) => {

    // 获取前端传入的验证码
    const verifyCode = req.body.verifyCode
    // 检测传入验证码和数据库中保存的验证码是否一致，是否过期
    // 处理逻辑.......

    let phone = req.body.phone
    let password = req.body.password
    // 用户名
    let username = "书友" + new Date().getTime().toString().slice(0, 8);
    // 判断手机号
    if (phone) {
        if (!/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/.test(phone)) {
            res.json({
                "state": 400,
                "error": "手机格式不正确,请重新输入!"
            })
            return
        }
    } else {
        res.json({
            "state": 400,
            "error": "手机号不能为空"
        })
        return
    }
    // 判断密码
    if (password) {
        if (password.length < 6 || password.length > 16) {
            res.json({
                "state": 400,
                "error": "密码过短，请输入6-16位密码!"
            })
            return
        }
    } else {
        res.json({
            "state": 400,
            "error": "密码不能为空"
        })
        return
    }

    // 验证码
    if (!verifyCode) {
        res.json({
            "state": 400,
            "error": "验证码不能为空"
        })
        return
    }

    let data = {
        phone: phone,
        password: md5(password + md5_key),
        username: username
    }
    // 判断验证码是否错误
    let sql = "SELECT * FROM codes WHERE phone = ? AND verifyCode = ?"
    conn.query(sql, [phone, verifyCode], (error, results, fields) => {
        if (error) return console.log(error.message)
        if (results.length == 0) {
            res.json({
                "state": 400,
                "error": "验证码错误!"
            })
            return
        } else {
            let sql = "INSERT INTO `users` SET ?"
            conn.query(sql, data, (error, results, fields) => {
                if (error) return console.log(error.message)
                conn.query("DELETE FROM codes WHERE phone = ?", phone, (error, results, fields) => {
                    if (error) return console.log(error.message)
                    res.json({
                        "state": 200,
                        "message": "注册成功!"
                    })
                })
            })
        }
    })
})


// 删除用户
router.delete(`/${apiName}/:id(\\d+)`, (req, res) => {
    let id = req.params.id
    let sql = "DELETE FROM `users` WHERE id = ?"
    conn.query(sql, id, (error, results, fields) => {
        if (error) {
            res.json({
                "state": 400,
                "error": error.message
            })
        } else {
            res.json({
                "state": 200,
                "msg": "删除用户成功!"
            })
        }
    })
})

// 查询一个用户
router.get(`/${apiName}/:id(\\d+)`, (req, res) => {
    let id = req.params.id
    let sql = 'SELECT * FROM `users` WHERE id = ?'
    conn.query(sql, id, (error, results, fields) => {
        if (error) {
            res.json({
                "state": 400,
                "error": error.message
            })
        } else {
            res.json({
                "state": 200,
                "data": {
                    "id": results[0].id,
                    "username": results[0].username,
                    "phone": results[0].phone,
                    "coin": results[0].book_coin,
                    "avatar": results[0].avatar
                }
            })
        }
    })
})

// 查询多个用户
router.get(`/${apiName}`, (req, res) => {
    // 接收查询参数
    let page = req.query.page || 1
    let per_page = req.query.per_page || 5
    let keyword = req.query.name || ''
    /******* 根据查询参数拼 SQL 语句 */
    let where = ''
    let data = []
    if (keyword) {
        where = ` WHERE username LIKE ?`
        data[0] = `%${keyword}%`
    }
    // 翻页
    let offset = (page - 1) * per_page
    let limit = ` LIMIT ${offset},${per_page}`
    // 查询总的记录数
    let sql1 = `SELECT COUNT(*) total FROM users ${where}`
    conn.query(sql1, data, (err, results, fields) => {
        // 总的记录数
        let total = results[0].total
        // // 查询数据
        let sql2 = `SELECT id,phone,username,avatar,book_coin FROM users ${where} ${limit}`
        conn.query(sql2, data, (err, results, fields) => {
            res.json({
                "state": 200,
                "total": total,
                "data": results
            })
        })
    })
})


// 修改密码或者用户名
router.put(`/${apiName}/:id(\\d+)`, async (req, res) => {
    let id = req.params.id
    let username = req.body.username
    let password = req.body.password
    let password_s = req.body.password_s
    let data = {}
    if (username) {
        data.username = username
    }
    if (password) {
        let sql = "SELECT password FROM `users` WHERE id = ?"
        const pas = async () => {
            password = md5(password + md5_key)
            return new Promise((resolve, reject) => {
                conn.query(sql, id, (error, results, fields) => {
                    if (password != results[0].password) {
                        res.json({
                            "state": 400,
                            "error": "原密码错误!"
                        })
                        return
                    } else {
                        if (password_s) {
                            if (password_s.length < 6 || password_s.length > 16) {
                                res.json({
                                    "state": 400,
                                    "error": "密码过 短,请输入6-16位新密码!"
                                })
                                reject();
                                return
                            } else {
                                data.password = md5(password_s + md5_key)
                                resolve();
                            }
                        } else {
                            res.json({
                                "state": 400,
                                "error": "新密码不能为空!"
                            })
                            reject()
                            return
                        }
                    }
                })
            })

        }
        await pas();
    }

    // 判断 data 是否为空
    if (JSON.stringify(data) == "{}") {
        res.json({
            "state": 400,
            "error": "用户名密码至少要修改一项"
        })
        // 退出程序
        return
    }

    let sql_1 = 'UPDATE `users` SET ? WHERE id=?'
    // 执行 SQL
    conn.query(sql_1, [data, id], (error, results, fields) => {
        if (error) {
            res.json({
                "state": 400,
                "error": error.message
            })
        } else {
            res.json({
                "state": 200,
                "msg": "修改成功!"
            })
        }
    })


})
// 导出路由
module.exports = router;