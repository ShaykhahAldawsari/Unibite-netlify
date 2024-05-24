const Caffe = require("../models/Cafe");
const Menu = require("../models/Menu");

const fetchCafes = async (req, res) => {
  try {
    const items = await Caffe.find({});

    if (!items) {
      return res.status(200).json({
        status: "failed",
        items: [],
      });
    }
    return res.status(200).json({
      status: "success",
      items: items,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "internal-server-error",
      items: [],
    });
  }
};

const addCafe = async (req, res) => {
  try {
    const data = req.body;

    const item = await Caffe.create(data);

    if (!item) {
      return res.status(200).json({
        status: "failed",
      });
    }
    return res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: "internal-server-error",
    });
  }
};

module.exports = { fetchCafes, addCafe };
