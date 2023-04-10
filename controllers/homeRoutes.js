const router = require("express").Router();
const { Movies, User, Likes } = require("../models");
const withAuth = require("../utils/auth");
const { Image } = require("image-js");
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
  let user = req.session.user_id;
  //find only likes associated with logged in user
  const likesData = await Likes.findAll({
    where: {
      user_id: user,
      //do not include "unliked"
      is_liked: 1,
    },
    include: [Movies],
  });
  const likes = likesData.map((like) => like.get({ plain: true }));
  res.render("likes", { likes, logged_in: req.session.logged_in, title: 'likes', active: {likes: true} });
});

// Use withAuth middleware to prevent access to route
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Movies }],
    });

    const user = userData.get({ plain: true });
    // render user information in handlebar's profile tempalte
    res.render("dashboard", {
      ...user,
      logged_in: true, title: 'dashboard', active: {dashboard: true}
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  const moviesData = await Movies.findAll({ include: [User] });
  const movies = moviesData.map((movie) => movie.get({ plain: true }));
  res.render("homepage", { movies, logged_in: req.session.logged_in, title: 'homepage', active: {homepage: true} });
});


// router.get("/", async (req, res) => {
//   const imageData = await Movies.findAll({
//     where: {
//       image_name: "",
//     },
//   });
//   const images = Image.load(imageData)
//   const imageSize = images
//     .resize({ width: 400 })
//     .grey()
//   res.render('homepage', { imageSize })
// });

module.exports = router;
