const express = require("express");
const axios = require("axios");
const { getMeaningOfWord } = require("./dictionaryApi");
const router = express.Router();

router.get("/:word", (req, res) => {
  const result = getMeaningOfWord(req.params.word);
  res.json(result[0]);
});

module.exports = router;
