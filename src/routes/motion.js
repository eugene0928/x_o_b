const controller = require( '../controllers/motion.js' )
const router = require( 'express' ).Router()

router.post( '/move', controller.POST )

module.exports = router