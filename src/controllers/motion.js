const POST = ( req, res ) => {
    try {
        let { id, movePlace } = req.body
        let choice = id % 2 ? 'X' : 'O'

        if( !process.db.find( user => user.id == id ) ) {
            throw new Error( 'This user is not found' )
        }

        if( process.db.length < 2 ) {
            throw new Error( 'At least two users are required to play!' )
        }

        if( process.motions.find( el => Object.values( el ).includes( movePlace ) ) ) {
            throw new Error( 'This place is not empty' )
        }

        if( movePlace < 1 || movePlace > 9 ) {
            throw new Error( 'Invalid input!' )
        }
        
        process.motions.push( { [choice]: movePlace } )
        process.db.find( user => user.id == id ).moves.push( movePlace )
        console.log(process.db)
        
        res.status( 200 )
            .json( { status: 200, message: 'The place is taken successfully!' } )
    } catch (err) {
        res.status( 400 )
            .json( { status: 400, message: err.message } )
    }
}

module.exports = {
    POST
}