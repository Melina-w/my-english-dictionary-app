const request = require("supertest");
const express = require("express");

const router = express.Router();

module.exports = router;

router.get("/", async (res, req) => {
  res.json({});
});
