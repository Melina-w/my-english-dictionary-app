const express = require("express");
const { getMeaningOfWord } = require("./dictionaryApi");
const { getImageOfWord } = require("./imageApi");
const router = express.Router();

router.get("/:word", async (req, res) => {
  try {
    const meaningResult = await getMeaningOfWord(req.params.word);
    const imageResult = await getImageOfWord(req.params.word);
    const response = meaningResult[0];
    response.image = imageResult.photos[0].src;
    res.json(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
