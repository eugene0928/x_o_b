const controller = require( '../controllers/user.js' )
const router = require( 'express' ).Router()

router.get( '/user', controller.GET )

module.exports = router 