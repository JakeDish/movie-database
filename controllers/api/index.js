const router = require("express").Router();
const moviesRoutes = require("./moviesRoutes");
// const userRoutes = require("");
// const likesRoutes = require("");

router.use("/movies", moviesRoutes);
// router.use("/user", userRoutes);
// router.use("/likes", likesRoutes);

module.exports = router;