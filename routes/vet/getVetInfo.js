const express = require("express");
const { vetCollection } = require("../../lib/collection");
const router = express.Router();

router.get("/", async (_, res) => {
  const result = await vetCollection.find().toArray();
  res.send(result);
});
module.exports = router;