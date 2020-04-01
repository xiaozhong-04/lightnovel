// 导入mysql
const mysql = require("mysql")
const confing = require("./confing")
const connection = mysql.createConnection(confing.db)
connection.connect()
//导出
module.exports = connection