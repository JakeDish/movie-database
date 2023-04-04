const User = require("./user");
const Movies = require("./movies");
const Likes = require("./likes");

//movies belongsTo user
User.hasMany(Movies, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

//likes belongsTo movies
Movies.belongsTo(User, {
  foreignKey: "user_id",
});

// User.hasMany(Movies, {
//   through: Likes,
//   foreignKey: "user_id",
// })

Movies.belongsToMany(User, {
  through: Likes,
  foreignKey: "movie_id",
});

module.exports = { User, Movies, Likes };
