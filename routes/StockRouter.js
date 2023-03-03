const Router = require('express').Router()
const controller = require('../controllers/StockController')


Router.get('/:watchlistId', controller.GetWatchlist)
Router.post('/:watchlistId', controller.CreateWatchlist)
Router.delete('/:id', controller.DeleteWatchlist)

module.exports = Router