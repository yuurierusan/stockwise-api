const { Stock, User, Watchlist } = require('../models')

const GetWatchlist = async (req, res) => {
    try {
        const watchlist = await Watchlist.findOne({
            where: { userId: req.params.userId },
        })
        res.send(watchlist)
    } catch (error) {
        throw error
    }
}

const CreateWatchlist = async (req, res) => {
    try {
        let userId = parseInt(req.params.userId)
        let watchlistBody = {
            userId,
            ...req.body,
        }
        let watchlist = await Watchlist.create(watchlistBody)
        res.send(watchlist)
    } catch (error) {
        throw error
    }
}

module.exports = {
    CreateWatchlist,
    GetWatchlist,
}
