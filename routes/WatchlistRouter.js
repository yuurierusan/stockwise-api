const Router = require('express').Router()
const controller = require('../controllers/WatchlistController')
const middleware = require('../middleware')

Router.get(
    '/:userId',
    middleware.stripToken,
    middleware.verifyToken,
    controller.GetWatchlist
)
Router.post(
    '/:userId',
    middleware.stripToken,
    middleware.verifyToken,
    controller.CreateWatchlist
)

module.exports = Router
