const express = require("express");
const { postCollection } = require("../../lib/collection");
const router = express.Router();

router.get("/", async (req, res) => {
      const result = await postCollection.find().toArray();
      res.send(result);
    });
module.exports = router;
