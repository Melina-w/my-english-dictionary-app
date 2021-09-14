const express = require("express");
const { getMeaningOfWord } = require("./dictionaryApi");
const { getImageOfWord } = require("./imageApi");
const router = express.Router();

router.get("/:word", async (req, res) => {
  try {
    const meaningPromise = getMeaningOfWord(req.params.word);
    const imagePromise = getImageOfWord(req.params.word);
    const result = await Promise.all([meaningPromise, imagePromise]);
    let response = result[0][0];
    response.image = result[1].photos.map((photo) => {
      return photo.src;
    });
    res.json(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;
