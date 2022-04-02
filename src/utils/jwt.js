const JWT = require('jsonwebtoken')
const secretKey = 'passw'

module.exports = {
    sign: (payload) => JWT.sign(payload, secretKey),
    verify: (token) => JWT.verify(token, secretKey)
}