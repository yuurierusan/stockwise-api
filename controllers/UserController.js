const { User } = require('../models')

const GetUsers = async (req, res) => {
    try {
        const recent = await User.findAll()
        res.send(recent)
    } catch(error) {
        throw error
    }
}

const CreateUser = async (req, res) => {
    try {
        let user = await User.create(req.body)
        res.send(user)
    } catch(error) {
        throw error
    }
}

const UpdateUser = async (req, res) => {
    try{
        let userId = parseInt(req.params.id)
        let UpdatedUser = await User.update(req.body, {
            where: { id: userId },
            returning: true
        })
        res.send(UpdatedUser)
    } catch(error) {
        throw error
    }
} 

const DeleteUser = async (req, res) => {
    try {
        let id = parseInt(req.params.id)
        await User.destroy({ where: { id: id }})
        res.send({ message: `Deleted user with an id of ${id}` })
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetUsers,
    CreateUser,
    UpdateUser,
    DeleteUser
}