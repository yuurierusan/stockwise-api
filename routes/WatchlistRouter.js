const Router = require('express').Router()
const controller = require('../controllers/WatchlistController')


Router.get('/:userId', controller.GetWatchlist)
Router.post('/:userId', controller.CreateWatchlist)
Router.put('/:userId', controller.UpdateWatchlist)
Router.delete('/:userId', controller.DeleteTwert)

module.exports = Router