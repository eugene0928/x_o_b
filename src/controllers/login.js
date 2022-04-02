const JWT = require('../utils/jwt.js')
const path = require('path')

const POST = (req, res) => {
    try {
        const { username } = req.body
        const { file } = req.files
        const db = process.db
        const user = db.find( el => el.userName == username )

        if(user) {
            throw new Error('This user already exists!')
        }

        if(file.size > 5 * 1024 * 1024) {
            throw new Error('This file is too large!')
        }

        const fileName = Date.now() + file.name
        const filePath = path.join(__dirname, '../', 'uploads', fileName)
        const newUser = {
            id: db.length ? db.at(-1).id + 1 : 1,
            userName: username,
            file: fileName,
            turn: db.length == 0,
            validPlayer: db.length < 2,
            status: db.length < 2 ? 'Player' : 'Watcher',
            moves: {}
        }

        db.push(newUser)
        file.mv(filePath)

        const token = JWT.sign({ id: newUser.id, userName: newUser.userName})

        console.log(db)

        return res
			.status(200)
			.cookie('token', token)
			.json({ 
				status: 200,
                id: newUser.id,
				message: "You joined the game!" 
			})
    } catch (err) {
        res.status(400)
            .json({
                status: 400,
                message: err.message
            })
    }
}

module.exports = {
    POST
}