const request = require("supertest");
const server = require("../server");
const dictionaryApiResponse = require("./dictionaryApiResponse.json");
const dictionaryApi = require("./dictionaryApi");
const imageApi = require("./imageApi");
const imageApiResponse = require("./imageApiResponse.json");
const meaningGetResponse = require("./meaningGetResponse");

jest.mock("./dictionaryApi");
jest.mock("./imageApi");

test("GET /meaning/word", (done) => {
  dictionaryApi.getMeaningOfWord.mockImplementation(() => {
    return dictionaryApiResponse;
  });
  imageApi.getImageOfWord.mockImplementation(() => {
    return imageApiResponse;
  });

  request(server)
    .get("/meaning/hello")
    .expect(200)
    .end((err, res) => {
      expect(err).toBeFalsy();
      expect(res.body).toStrictEqual(meaningGetResponse);
      expect(dictionaryApi.getMeaningOfWord).toBeCalledWith("hello");
      expect(imageApi.getImageOfWord).toBeCalledWith("hello");
      done();
    });
});

it("responds with 500 and error on getMeaningOfWOrd & getImageOfWord rejection", () => {
  dictionaryApi.getMeaningOfWord.mockImplementation(() =>
    Promise.reject(new Error("mock expectedResponse error"))
  );
  imageApi.getImageOfWord.mockImplementation(() => {
    Promise.reject(new Error("mock expectedResponse error"));
  });
  return request(server)
    .get("/meaning/hello")
    .expect(500)
    .then((err) => {
      expect(err.text).toBe("mock expectedResponse error");
      return null;
    });
});
