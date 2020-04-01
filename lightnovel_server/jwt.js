// 导入jsonwebtoken
const jwt = require("jsonwebtoken")
const { jwt_key } = require("./confing")

// 生成令牌
const makeJWT = function (data) {
    return jwt.sign(data, jwt_key.jwt_token, { expiresIn: jwt_key.time })
}

module.exports = {
    makeJWT
}