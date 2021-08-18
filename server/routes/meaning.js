const express = require("express");

const router = express.Router();

module.exports = router;

router.get("/:word", async (req, res) => {
  console.log(`${req.params.word}`);
  res.json(req.params);
});
