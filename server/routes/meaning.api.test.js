const request = require("supertest");
const server = require("../server");

test("GET /meaning/word", () => {
  //arrange

  // act
  request(server)
    .get("/meaning/word")
    .expect(200)
    .end((err, res) => {
      expect(err).toBeFalsy();
      // Assert
    });
});
