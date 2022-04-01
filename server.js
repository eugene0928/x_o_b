const express = require('express')
const { PORT } = require('./config')
const url = 'http://192.168.1.8'
const app = express()




app.listen(PORT, () => {
    console.log('=> ' + url + ':' + PORT)
})