const express = require('express')
const { PORT } = require('./config')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')
const url = 'http://192.168.1.8'
const app = express()

process.db = []

app.use(express.static(path.join(__dirname, 'src', 'public')))
app.use(cookieParser())
app.use(fileUpload())


// routers
const loginRouter = require('./src/routes/login.js')



app.use(loginRouter)


app.listen(PORT, () => {
    console.log('=> ' + url + ':' + PORT)
})