const express=require("express");
const {postCollection}=require("../../lib/collection");
const router = express.Router();

router.post("/", async (req, res) => {
  const newPost = req.body;
  console.log(newPost);
  const result = await postCollection.insertOne(newPost);
  res.send(result);
});
module.exports=router;