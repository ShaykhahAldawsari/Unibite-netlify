const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  type: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  itemname: {
    type: String,
    default: "",
  },
  itemtype: {
    type: String,
    default: "",
  },
  itemkcals: {
    type: String,
    default: "",
  },
  itemprice: {
    type: String,
    default: "",
  },
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
