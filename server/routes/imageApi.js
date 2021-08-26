const axios = require("axios");

async function getImageOfWord(word) {
  try {
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=${word}&per_page=9`,
      {
        headers: {
          Authorization:
            "563492ad6f91700001000001082a08f08aea4355b37e03e6ab66d18e",
        },
      }
    );
    return response.data;
  } catch (err) {
    throw new Error("Couldn't fetch image");
  }
}

exports.getImageOfWord = getImageOfWord;
