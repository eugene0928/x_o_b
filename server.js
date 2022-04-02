const express = require( 'express' ) 
const { PORT } = require( './config' )
const fileUpload = require( 'express-fileupload' )
const cookieParser = require( 'cookie-parser' )
const path = require( 'path' )
const url = 'http://192.168.1.8'
const app = express()

process.db = []
process.motions = []

const authMiddleware = require( './src/middleware/authentication.js' )

app.use( express.static( path.join( __dirname, 'src', 'uploads' ) ) )
app.use( cookieParser() )
app.use( express.json() )
app.use( /^((?!\/login).)*$/, authMiddleware )
app.use( fileUpload() )


// routers
const loginRouter = require( './src/routes/login.js' )
const winROuter = require( './src/routes/win.js' )
const userRouter = require( './src/routes/user.js' )
const motionRouter = require( './src/routes/motion.js' )


app.use( loginRouter )
app.use( winROuter )
app.use( userRouter )
app.use( motionRouter )


app.listen( PORT, () => {
    console.log('=> ' + url + ':' + PORT)
} )