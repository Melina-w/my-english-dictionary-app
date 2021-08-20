const request = require("supertest");
const server = require("../server");
const expectedResponse = require("./response.json");
const dictionaryApi = require("./dictionaryApi");

jest.mock("./dictionaryApi");

test("GET /meaning/word", (done) => {
  dictionaryApi.getMeaningOfWord.mockImplementation(() => {
    return [expectedResponse];
  });
  request(server)
    .get("/meaning/hello")
    .expect(200)
    .end((err, res) => {
      expect(err).toBeFalsy();
      expect(res.body).toStrictEqual(expectedResponse);
      expect(dictionaryApi.getMeaningOfWord).toBeCalledWith("hello");
      done();
    });
});

// test to check error
