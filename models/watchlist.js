'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Watchlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Watchlist.belongsTo(models.User, { foreignKey: 'userId'})
      Watchlist.hasMany(models.Stock, { foreignKey: 'watchlistId' })
      // define association here
    }
  }
  Watchlist.init({
    name: DataTypes.STRING,
    userId: { 
      type:DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Watchlist',
    tableName: 'watchlists'
  });
  return Watchlist;
};