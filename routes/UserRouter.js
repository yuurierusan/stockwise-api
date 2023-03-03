const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.get('/', controller.GetUsers)
Router.post('/', controller.CreateUser)
Router.put(
    '/:id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.UpdateUser
)
Router.delete(
    '/:id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteUser
)

module.exports = Router
