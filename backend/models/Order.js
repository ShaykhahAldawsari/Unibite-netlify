const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
  restaurent: {
    type: String,
    default: "",
  },

  orderNumber: {
    type: String,
    required: true,
  },

  items: {
    type: [
      {
        name: String,
        price: Number,
      },
    ],
    default: [],
  },
});

const CartItem = mongoose.model("CartItem", otpSchema);

module.exports = CartItem;
