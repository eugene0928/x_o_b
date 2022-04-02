const JWT = require('../utils/jwt.js')

module.exports = ( req, res, next ) => {
    try {
        const { token } =  req.cookies

        if( !token ) {
            return res.status( 401 )
                        .json( { status: 401, message: 'Token is required!' } )
        }

        const { userName } = (JWT.verify(token))

        if( !process.db.find( el => el.userName == userName) ) {
            return res.status( 401 )
                        .json( { status: 401, message: 'This user is not found!' } )
        }

        req.userName = userName
        return next()
    } catch ( err ) {
        res.status( 400 )
            .json( { status: 400, message: err.message } )
    }
}