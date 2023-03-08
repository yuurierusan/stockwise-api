const Router = require('express').Router()
const controller = require('../controllers/StockController')
const middleware = require('../middleware')

Router.get(
    '/trending',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetTrending
)
Router.get(
    '/:watchlistId',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetAllStocksFromWatchlist
)

Router.delete(
    '/:id',
    middleware.stripToken,
    middleware.verifyToken,
    controller.DeleteStock
)

module.exports = Router
