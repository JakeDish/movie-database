const router = require("express").Router();
const { Movies, User } = require("../models");
// router.get('/', async (req, res) => {
//   res.render('homepage')
// } );



router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/likes", async (req, res) => {
  res.render("likes");
});

router.get("/dashboard", async (req, res) => {
  res.render("dashboard");
});


router.get("/", async (req, res) => {
  const moviesData = await Movies.findAll({ include: [User] });
  const movies = moviesData.map((movie) => movie.get({ plain: true }));
  res.render("homepage", { movies });
});

module.exports = router;

