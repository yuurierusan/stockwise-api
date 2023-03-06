const { Stock } = require("../models")

const GetAllStocksFromWatchlist = async (req, res) => {
  try {
    const stockList = await Stock.findAll({
      where: { watchlistId: req.params.watchlistId },
    })
    res.send(stockList)
  } catch (error) {
    throw error
  }
}

const GetTrending = async (req, res) => {
  try {
    const stockTrack = {}
    const stocks = await Stock.findAll()
    for (let i = 0; i < stocks.length; i++) {
        if (stockTrack[stocks[i].dataValues.ticker]) {
            stockTrack[stocks[i].dataValues.ticker] =
            stockTrack[stocks[i].dataValues.ticker] += 1
        } else {
            stockTrack[stocks[i].dataValues.ticker] = 1
        }
    }
    const keys = Object.keys(stockTrack)
    const values = Object.values(stockTrack)
    
    const trending = {}
    for (let i = 0; i < 5; i++) {
        let max = Math.max(...values)
        let index = values.indexOf(max)
        let key = keys[index]
        trending[key] = max
        keys.splice(index, 1)
        values.splice(index, 1)
    }
    res.send(trending)
  } catch (error) {
    throw error
  }
}

const AddStock = async (req, res) => {
  try {
    const stockName = await Stock.findAll({
      where: { name: req.params.name },
    })
    const found = stockName.find(
      (stock) => stock?.dataValues?.watchlistId === +req.params.watchlistId
    )

    if (!found) {
      try {
        let watchlistId = +req.params.watchlistId
        let stockBody = {
          watchlistId,
          ...req.body,
        }
        let stock = await Stock.create(stockBody)
        res.send(stock)
      } catch (error) {
        throw error
      }
    } else {
      res.send({ msg: `Unable to add stock, it already exists.` })
    }
  } catch (error) {
    throw error
  }
}

const DeleteStock = async (req, res) => {
  try {
    let id = +req.params.id
    await Stock.destroy({ where: { id: id } })
    res.send({ message: `Deleted stock with an id of ${id}` })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetTrending,
  GetAllStocksFromWatchlist,
  AddStock,
  DeleteStock,
}
