const Movies = require("./Movies");
const User = require("./User");
const Likes = require("./Likes");

//movies belongsTo user
Movies.belongsTo(User, {
  foreignKey: "",
  onDelete: "CASCADE",
});

//likes belongsTo movies
Likes.belongsTo