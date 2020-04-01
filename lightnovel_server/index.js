// 导入express
const express = require("express")
const bodyParser = require("body-parser")
// 导入cors
const cors = require("cors")
// 创建服务器
const app = express();
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,post,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
// 导入confing
const confing = require("./confing")

app.use(cors())

// 配置post请求解析数据
app.use(bodyParser.urlencoded({ extended: true }))

//设置静态目录
app.use(express.static('./public'))

// 导入用户路由 和 配置
const user = require("./routers/user.js")
app.use("/api/v1", user)
// 导入小说路由 和 配置
const fiction = require("./routers/fiction")
app.use("/api/v1", fiction)
// 导入书架路由 和 配置
const bookshelf = require("./routers/bookshelf")
app.use("/api/v1", bookshelf)

// 监听并指定端口
app.listen(confing.server.port, confing.server.ip, () => {
    console.log(`启动访问 http://${confing.server.ip}:${confing.server.port}`);
})