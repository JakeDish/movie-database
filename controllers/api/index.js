const router = require("express").Router();
const moviesRoutes = require("./moviesRoutes");
const loginRoutes = require("./loginRoutes");
const logoutRoutes = require("./logoutRoutes");
const signUpRoutes = require("./signUpRoutes");

// const userRoutes = require("");
// const likesRoutes = require("");


router.use("/movies", moviesRoutes);
router.use("/login", loginRoutes);
router.use("/logout", logoutRoutes);
router.use("/signup", signUpRoutes);
// router.use("/user", userRoutes);
// router.use("/likes", likesRoutes);

module.exports = router;
