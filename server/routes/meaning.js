const express = require("express");
const { getMeaningOfWord } = require("./dictionaryApi");
const router = express.Router();

router.get("/:word", async (req, res) => {
  const result = await getMeaningOfWord(req.params.word);
  res.json(result[0]);
});

module.exports = router;
