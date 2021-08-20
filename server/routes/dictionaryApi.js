const axios = require("axios");

async function getMeaningOfWord(word) {
  const response = await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`
  );
  return response.data;
}
exports.getMeaningOfWord = getMeaningOfWord;
