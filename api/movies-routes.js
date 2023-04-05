const router = require("express").Router();
const { Movies, User } = require("../models")

router.get("/", (req, res) => {
  Movies.findAll({})
  .then((movies) => {
    res.json(movies);
  })
  .catch((err) => {
    console.log(err);
  })
})