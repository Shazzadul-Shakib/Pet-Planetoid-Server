const express = require("express");
const { commentCollection } = require("../../lib/collection");
const router = express.Router();

router.get("/", async (req, res) => {
  const post_id = req.query.postId;
  const query = { postId: post_id };
  const result = await commentCollection
    .find(query)
    .sort({ createdAt: -1 })
    .toArray();
  res.send(result);
});
module.exports = router;
