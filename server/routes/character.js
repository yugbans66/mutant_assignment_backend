const express = require("express");
const { getCharacterInfo } = require("../controller/character/character");

const router = express.Router();

router.get("/", getCharacterInfo);

module.exports = router;
