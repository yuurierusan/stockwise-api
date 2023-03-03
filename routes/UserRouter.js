const Router = require('express').Router()
// const controller = require('../controllers/UserController')

Router.get('/', controller.GetUsers)
Router.post('/', controller.CreateUser)
Router.put('/:id', controller.UpdateUser)
Router.delete('/:id', controller.DeleteUser)

module.exports = Router;