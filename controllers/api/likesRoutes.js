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


router.put("/:id", async (req, res) => {
  const likedata = await Likes.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  res.status(200).json(likedata)
});

router.post("/", async (req, res) => {
  try{
    const newLike = await Likes.create({
      ... req.body, 
      user_id: req.session.user_id,
      });

    res.status(200).json(newLike);
    } catch (err) {
    res.status(400).json(err);
  }
  });

module.exports = router;
