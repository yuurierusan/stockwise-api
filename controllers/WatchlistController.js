const { Stock, User, Watchlist } = require('../models')

const GetWatchlist = async (req, res) => {
    try {
      const watchlist = await Watchlist.findByPk(req.params.userId)
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
        ...req.body
      }
      let watchlist = await Watchlist.create(watchlistBody)
      res.send(watchlist)
    } catch (error) {
      throw error
    }
  }
  
  const UpdateWatchlist = async (req, res) => {
    try {
      let watchlistId = parseInt(req.params.userId)
      let UpdatedWatchlist = await Watchlist.update(req.body,{
        where: { userId: watchlistId },
        returning: true
      })
      res.send(UpdatedWatchlist)
    } catch (error) {
      throw error
    }
  }
  
  const DeleteWatchlist = async (req, res) => {
    try {
      let id = parseInt(req.params.userId)
      await Watchlist.destroy({ where: { userId: id } })
      res.send({ message: `Deleted twert with an id of ${id}` })
    } catch (error) {
      throw error
    }
  }

  module.exports = {
    GetWatchlist,
    CreateWatchlist,
    UpdateWatchlist,
    DeleteWatchlist
  }