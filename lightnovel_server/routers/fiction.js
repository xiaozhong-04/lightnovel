// 创建路由
const router = require("express").Router()
// 导入数据库
const conn = require("../db")

// 查询一个
router.get("/novels/:id(\\d+)", (req, res) => {
    let id = req.params.id
    let sql = `SELECT a.*,b.hot_vals,b.last_update,c.novel_classify,c.novel_status,c.word_nums,c.novel_tags,c.novel_paths 
                    FROM novels a 
                    left join novel_detail b on a.id = b.novel_id 
                    left join detail c on b.detail_id = c.id 
                    WHERE a.id = ?`
    conn.query(sql, id, (error, results, fields) => {
        if (error) return console.log(error.message)
        res.json({
            "code": 200,
            "data": results
        })
    })
})

// 查询指定的小说
router.get("/designation", (req, res) => {
    let id1 = req.query.id1
    id1 = id1.split(',');
    let sql = `SELECT a.*,b.hot_vals,b.last_update,c.novel_classify,c.novel_status,c.word_nums,c.novel_tags,c.novel_paths  
                    FROM novels a 
                    left join novel_detail b on a.id = b.novel_id 
                    left join detail c on b.detail_id = c.id 
                    WHERE a.id IN (?)`
    conn.query(sql, [id1], (error, results, fields) => {
        if (error) return console.log(error.message)
        res.json({
            "code": 200,
            "data": results
        })
    })
})

// 查询多个
router.get("/novels", (req, res) => {
    // 排序(排序0=推荐，1=人气，2=订阅，3=收藏， 4=点击率, 5=时间)
    let type = req.query.type || ""
    let sortway = req.query.sortway || "asc"
    // 页数 和 条数
    let page = req.query.page || 1
    let per_page = req.query.per_page || 16
    // 搜索 标题 作者 标签
    let keyword = req.query.keyword || ""
    // 分类
    let sz = req.query.sz || ""
    // 类型
    let fc = req.query.fc || ""
    // 字数
    let wd = req.query.wd || ""
    // 状态
    let status = req.query.status || ""
    /******* 根据查询参数拼 SQL 语句 */
    let where = ""
    let data = []
    let where_sz = ""
    if (keyword) {
        where = ` WHERE CONCAT(IFNULL(a.novel_title,''),IFNULL(a.novel_author,''),IFNULL(c.novel_tags,'')) LIKE ?`
        data[0] = `%${keyword}%`
    } else {
        // 分类
        if (sz) {
            where_sz = `WHERE c.novel_type = ${sz}`
        } else {
            where_sz = `WHERE c.novel_type in (0,1,2)`
        }
    }
    // 类型
    let where_fc = ""
    if (fc) {
        where_fc = `AND c.novel_classify LIKE "%${fc}%"`
    }
    // 字数
    let where_wd = ""
    if (wd) {
        if (wd == "1") {
            where_wd = `AND (c.word_nums BETWEEN "0" AND "30")`
        } else if (wd == "2") {
            where_wd = `AND (c.word_nums BETWEEN "30" AND "50")`
        } else if (wd == "3") {
            where_wd = `AND (c.word_nums BETWEEN "50" AND "100")`
        } else if (wd == "4") {
            where_wd = `AND (c.word_nums BETWEEN "100" AND "200")`
        } else if (wd == "5") {
            where_wd = `AND c.word_nums > 200`
        }
    }
    // 状态
    let where_status = ""
    if (status) {
        where_status = `AND c.novel_status = ${status}`
    }

    // 排序
    let order = ""
    if (type) {
        if (type == "0") {
            type = "is_recommend"
        } else if (type == "1") {
            type = "hot_vals"
        } else if (type == "2") {
            type = "subscribe_ratio"
        } else if (type == "3") {
            type = "collect_ratio"
        } else if (type == "4") {
            type = "click_ratio"
        } else if (type == "5") {
            type = "last_update"
        }
        order = ` ORDER BY b.${type} ${sortway}`
    }
    // 翻页
    let offset = (page - 1) * per_page
    let limit = ` LIMIT ${offset},${per_page}`

    // 查询总的记录数
    let sql1 = `SELECT COUNT(*) total 
                    FROM novels a 
                    left join novel_detail b on a.id = b.novel_id 
                    left join detail c on b.detail_id = c.id 
                    ${where} ${where_sz} ${where_fc} ${where_wd} ${where_status} ${order}`
    conn.query(sql1, data, (error, results, fields) => {

        // 总的记录数
        let total = results[0].total

        // 查询数据
        let sql2 = `SELECT * 
                        FROM novels a 
                        left join novel_detail b on a.id = b.novel_id 
                        left join detail c on b.detail_id = c.id 
                        ${where} ${where_sz} ${where_fc} ${where_wd} ${where_status} ${order} ${limit}`
        conn.query(sql2, data, (err, results, fields) => {
            res.json({
                "code": 200,
                "total": total,
                "data": results
            })
        })
    })
})

module.exports = router






