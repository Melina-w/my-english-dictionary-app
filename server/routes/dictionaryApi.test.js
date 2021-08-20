const { getMeaningOfWord } = require("./dictionaryApi");
const responseExpected = require("./axios.json");
const axios = require("axios");

jest.mock("axios");

test("getMeaningOfWord is called by a word", async () => {
  axios.get.mockImplementation(() => {
    // axios has a property data, and inside it has the responseExpected
    return Promise.resolve({ data: responseExpected });
  });
  expect(await getMeaningOfWord("dog")).toStrictEqual(responseExpected);
  expect(axios.get).toBeCalledWith(
    `https://api.dictionaryapi.dev/api/v2/entries/en_US/dog`
  );
});
