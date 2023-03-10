'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {

    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Stock.belongsTo(models.Watchlist, { foreignKey: 'watchlistId'})
      // define association here
    }
  }
  Stock.init({
    name: { 
      type: DataTypes.STRING,
      allowNull: false
    },
    ticker: { 
      type: DataTypes.STRING,
      allowNull: false 
    },
    watchlistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'watchlists',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Stock',
    tableName: 'stocks'
  });
  return Stock;
};