const {Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Likes extends Model {}

Likes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    movie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "movies",
        key: "id",
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "movies",
        key: "name",
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "movies",
        key: "description",
      },
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "movies",
        key: "img",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    isLiked:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "likes",
  }
);

module.exports = Likes;
