const Router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = require('../middleware')

Router.post('/', controller.CreateUser)

module.exports = Router
