const Router = require('express').Router()
const UserRouter = require('./UserRouter')
// const StockRouter = require('./StockRouter')
// const WatchlistRouter = require('./WatchlistRouter')

Router.use('/users', UserRouter)
// Router.use('/stock', StockRouter)
// Router.use('/watchlist', WatchlistRouter)

module.exports = Router
