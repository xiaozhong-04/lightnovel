// 创建路由
const router = require("express").Router()
// 导入数据库
const conn = require("../db")

// 加入书架
router.post("/bookracks", (req, res) => {
    let users_id = req.body.users_id
    let novel_id = req.body.novel_id
    let data = {
        users_id,
        novel_id
    }
    let sql = "SELECT * FROM bookrack WHERE users_id = ? AND novel_id = ?"
    conn.query(sql, [users_id, novel_id], (error, results, fields) => {
        if (error) return console.log(error.message)
        if (results.length != 0) {
            res.json({
                "state": 200,
                "msg": "该书已加入书架!"
            })
        } else {
            let sql = "INSERT INTO `bookrack` SET ?"
            conn.query(sql, data, (error, results, fields) => {
                if (error) return console.log(error.message)
                res.json({
                    "state": 200,
                    "msg": "加入成功!"
                })
            })
        }
    })

})

// 查询书架小说
router.get("/bookracks/:id(\\d+)", (req, res) => {
    let id = req.params.id
    let sql = `SELECT a.*,b.last_update,c.id bookrack_id FROM novels a 
                    LEFT JOIN novel_detail b ON a.id = b.novel_id 
                    LEFT JOIN bookrack c ON c.novel_id = a.id WHERE c.users_id = ?`
    conn.query(sql, id, (error, results, fields) => {
        if (error) return console.log(error.message)
        res.json({
            "state": 200,
            "data": results
        })
    })
})

// 删除书架小说
router.delete("/bookracks/:id(\\d+)", (req, res) => {
    let id = req.params.id
    let sql = "DELETE FROM `bookrack` WHERE id = ?"
    conn.query(sql, id, (error, results, fields) => {
        if (error) {
            res.json({
                "state": 400,
                "error": error.message
            })
        } else {
            res.json({
                "state": 200,
                "msg": "删除成功!"
            })
        }
    })
})

module.exports = router