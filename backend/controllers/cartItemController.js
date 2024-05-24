const CartItem = require("../models/CartItem");

const addCartItem = async (req, res) => {
  try {
    const { name, price } = req.body;

    if (!name || !price) {
      return res.status(200).json({
        status: "all-fields-required",
      });
    }

    const addedItem = await CartItem.create({
      name: name.trim(),
      price: price,
    });

    if (!addedItem) {
      return res.status(200).json({
        status: "failed",
      });
    }

    return res.status(200).json({
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({
      status: "internal-server-error",
    });
  }
};

const searchCartItem = async (req, res) => {
  try {
    const { query } = req.params;

    if (!query) {
      return res.status(200).json({
        status: "query-mising",
      });
    }

    query = query.trim();

    const result = await CartItem.findOne({
      name: query,
    });

    if (!result) {
      return res.status(200).json({
        status: "result-not-found",
      });
    }

    return res.status(200).json({
      status: "success",
      item: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: "internal-server-error",
    });
  }
};

module.exports = { addCartItem, searchCartItem };
