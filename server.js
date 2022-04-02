const express = require('express')
const { PORT } = require('./config')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')
const url = 'http://192.168.1.8'
const app = express()

process.db = []

const authMiddleware = require('./src/middleware/authentication.js')

app.use( express.static( path.join( __dirname, 'src', 'uploads' ) ) )
app.use( cookieParser() )
app.use( /^((?!\/login).)*$/, authMiddleware )
app.use( fileUpload() )


// routers
const loginRouter = require('./src/routes/login.js')
const userRouter = require( './src/routes/user.js' )


app.use( loginRouter )
app.use( userRouter )


app.listen(PORT, () => {
    console.log('=> ' + url + ':' + PORT)
})