const router = require("express").Router();
const { Likes } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", (req, res) => {
  Likes.findAll()
    .then((likes) => {
      res.json(likes);
    })
    .catch((err) => {
      console.log(err);
    });
});


router.put("/:id", (req, res) => {
  Likes.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((likes) => {
      res.json(likes);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
