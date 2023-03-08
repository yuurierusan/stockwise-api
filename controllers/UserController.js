const { User } = require('../models')

const CreateUser = async (req, res) => {
    try {
        let user = await User.create(req.body)
        res.send(user)
    } catch (error) {
        throw error
    }
}

module.exports = {
    CreateUser,
}
