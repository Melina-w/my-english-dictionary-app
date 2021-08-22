const axios = require("axios");

async function getMeaningOfWord(word) {
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`
    );
    return response.data;
  } catch (err) {
    throw new Error("Couldn't fetch meaning");
  }
}

exports.getMeaningOfWord = getMeaningOfWord;
