const GET = ( req, res ) => {
    res.json( process.db )
}

module.exports = {
    GET
}