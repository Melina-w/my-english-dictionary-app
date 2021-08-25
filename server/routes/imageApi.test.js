const { getImageOfWord } = require("./imageApi");
const expectedResponse = require("./imageApiResponse.json");
const axios = require("axios");

jest.mock("axios");

test("getImageOfWord is called by word", async () => {
  axios.get.mockImplementation(() => {
    // axios has a property data, and inside it has the responseExpected
    return Promise.resolve({ data: expectedResponse });
  });
  expect(await getImageOfWord("lockdown")).toStrictEqual(expectedResponse);
  expect(axios.get).toBeCalledWith(
    `https://api.pexels.com/v1/search?query=lockdown&per_page=1`,
    {
      headers: {
        Authorization:
          "563492ad6f91700001000001082a08f08aea4355b37e03e6ab66d18e",
      },
    }
  );
});

test("getImageOfWord return err when api call fails", async () => {
  axios.get.mockImplementation(() => {
    return Promise.reject(new Error("pexels api failure"));
  });
  return expect(getImageOfWord()).rejects.toThrow("Couldn't fetch image");
});
