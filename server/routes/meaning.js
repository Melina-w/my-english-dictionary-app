const express = require("express");
const { getMeaningOfWord } = require("./dictionaryApi");
const router = express.Router();

router.get("/:word", async (req, res) => {
  try {
    const result = await getMeaningOfWord(req.params.word);
    res.json(result[0]);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
