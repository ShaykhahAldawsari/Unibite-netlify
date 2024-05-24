const mongoose = require("mongoose");

const cafeSchema = new mongoose.Schema({
  cafename: {
    type: String,
    default: "",
  },
  cafeimg: {
    type: String,
    default: "",
  },
  cafelocation: {
    type: String,
    default: "",
  },
});

const Caffe = mongoose.model("Caffe", cafeSchema);

module.exports = Caffe;
