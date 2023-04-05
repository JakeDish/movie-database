const router = require("express").Router();
const moviesRoutes = require("./moviesRoutes");
const loginRoutes = require("./loginRoutes");
// const userRoutes = require("");
// const likesRoutes = require("");

router.use("/movies", moviesRoutes);
router.use("/login", loginRoutes);
// router.use("/user", userRoutes);
// router.use("/likes", likesRoutes);

module.exports = router;
