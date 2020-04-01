module.exports = {
    // 端口 和 ip
    server: {
        port: "1314",
        ip: "127.0.0.1"
    },
    // 数据库信息
    db: {
        host:"localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "lightnovel",
        charset: "utf8mb4_general_ci"
    },
    // 密码加密密钥
    md5_key: "123123",
    // 令牌 和 令牌过期时间
    jwt_key: {
        jwt_token: "@#$%^5724y5huhYGYG^T*&&*Y(*UHhjygbyug7t7868y89hUJHKJBHUHIYT&*Y9iplp[[kjnh&&YIHKHK",
        time: "2h"
    }
}