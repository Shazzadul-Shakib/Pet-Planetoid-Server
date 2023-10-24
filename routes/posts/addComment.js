const express = require("express");
const { commentCollection } = require("../../lib/collection");
const router = express.Router();

router.post('/', async (req, res) => {
  const newComment = { ...req.body, createdAt: new Date() };
  console.log(newComment);
  const result = await commentCollection.insertOne(newComment);
  res.send(result);
});
module.exports = router;