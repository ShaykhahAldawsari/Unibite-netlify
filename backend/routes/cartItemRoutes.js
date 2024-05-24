const express = require("express");

const {
  addCartItem,
  searchCartItem,
} = require("../controllers/cartItemController");

const router = express.Router();

router.get("/:query", searchCartItem);

router.post("/", addCartItem);

module.exports = router;
