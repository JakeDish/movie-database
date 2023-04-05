const router = require("express").Router();
const { Movies, User } = require("../../models");

router.get("/", (req, res) => {
 Movies.findAll({ include: [User] })
    .then((movies) => {
      res.json(movies);
      })
    .catch((err) => {
      console.log(err);
    });
});


router.get("/:id", (req, res) => {
  Movies.findOne({
    where: {
      id: req.params.id,
    },
    include: [User],
  })
    .then((movies) => {
      res.json(movies);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  Movies.create(req.body)
  .then((movies) => {
    res.json(movies);
  })
  .catch((err) => {
    console.log(err);
  });
});

router.put("/:id", (req, res) => {
  Movies.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((movies) => {
      res.json(movies);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/:id", (req, res) => {
  Movies.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((movies) => {
      res.json(movies);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
