const JWT = require('jsonwebtoken')
const secretKey = 'deno'

module.exports = {
    sign: (payload) => JWT.sign(payload, secretKey),
    verify: (token) => JWT.verify(token, secretKey)
}