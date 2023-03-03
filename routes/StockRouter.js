const Router = require('express').Router()
const controller = require('../controllers/StockController')


Router.get('/:watchlistId', controller.GetAllStock)
Router.post('/:watchlistId', controller.AddStock)
Router.delete('/:id', controller.DeleteStock)

module.exports = Router