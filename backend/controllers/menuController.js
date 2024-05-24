const Menu = require("../models/Menu");

const fetchItems = async (req, res) => {
  try {
    const items = await Menu.find({});

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

module.exports = { fetchItems };
