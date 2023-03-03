const Router = require('express').Router()
const controller = require('../controllers/StockController')
const middleware = require('../middleware')

Router.get(
    '/:watchlistId',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetAllStock
)
Router.post(
    '/:watchlistId',
    middleware.stripToken,
    middleware.verifyToken,
    controller.AddStock
)
Router.delete(
    '/:id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteStock
)

module.exports = Router
