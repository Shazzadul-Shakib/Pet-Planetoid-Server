const express = require("express");
const { postCollection } = require("../../lib/collection");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const userEmail = req.query.email;

    if (!userEmail) {
      const result = await postCollection
        .find()
        .sort({ createdAt: -1 })
        .toArray();
      res.json(result);
    }
    else {
      const result = await postCollection
      .find({ email: userEmail })
      .sort({ createdAt: -1 })
      .toArray();

    res.json(result);
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "An error occurred while fetching posts." });
  }
});

module.exports = router;
