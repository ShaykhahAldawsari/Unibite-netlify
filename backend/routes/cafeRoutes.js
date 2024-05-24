const express = require("express");

const { fetchCafes , addCafe} = require("../controllers/cafeController");

const router = express.Router();

router.get("/", fetchCafes);

router.post("/", addCafe);

module.exports = router;
