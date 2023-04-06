const router = require("express").Router();
const { Movies, User, Likes } = require("../models");
const withAuth = require("../utils/auth");
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
  var user = req.session.user_id;
  //find only likes associated with logged in user
  const likesData = await Likes.findAll({ 
    where: {
      user_id: user,
      //do not include "unliked"
      is_liked: 1,
    },
    include: [Movies] 
  });
  const likes = likesData.map((like) => like.get({ plain: true }));
  res.render("likes", { likes });
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
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  const moviesData = await Movies.findAll({ include: [User] });
  const movies = moviesData.map((movie) => movie.get({ plain: true }));
  res.render("homepage", { movies });
});

module.exports = router;
