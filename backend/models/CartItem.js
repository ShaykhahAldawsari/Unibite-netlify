const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
});

const CartItem = mongoose.model("CartItem", otpSchema);

module.exports = CartItem;
