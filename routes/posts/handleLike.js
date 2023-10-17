const express = require("express");
const { postCollection } = require("../../lib/collection");
const { ObjectId } = require("mongodb");
const router = express.Router();

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const filter = { _id: new ObjectId(id) };
  const newLikedUser = req.body.likeduser;
  let likedUser = req.body.likes;
  const targetIndex = likedUser.findIndex(
    (item) => item.email === newLikedUser.email
  );
  if (targetIndex !== -1) {
    const newArray = likedUser.filter(
      (item) => item.email !== newLikedUser.email
    );
    likedUser = newArray;
  } else {
    likedUser.push(newLikedUser);
  }

  const updateLikeStatus = {
    $set: {
      likes: likedUser,
    },
  };
  const result = await postCollection.updateOne(filter, updateLikeStatus);
  res.send(result);
});

module.exports = router;
