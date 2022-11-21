const express = require("express");
const { addProfile, getProfiles } = require("../controller/talent/profile");
const router = express.Router();

router.post("/", addProfile);
router.get("/", getProfiles);

module.exports = router;
