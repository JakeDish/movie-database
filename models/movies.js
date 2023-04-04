const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movies extends Model {}

Movies.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    movie_name: {
      type: DataTypes.STRING,
    }
    movie_description: {
      type: DataTypes.STRING,
    },
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
         references: {
          model: 'user',
          key: 'id'
         }
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'movies',
  }
);

module.exports = Movies;