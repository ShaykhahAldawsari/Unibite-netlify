const express = require("express");

const { fetchItems } = require("../controllers/menuController");

const router = express.Router();

router.get("/", fetchItems);

module.exports = router;
