const Order = require("../models/Order");

const placeOrder = async () => {
  try {
    const { items, orderNumber, restaurent } = req.body;

    if (!items || !orderNumber) {
      return res.status(200).json({
        status: "all-fields-required",
      });
    }

    const addedOrder = await Order.create({
      orderNumber: orderNumber,
      items: items,
      restaurent: restaurent ?? "",
    });

    if (!addedOrder) {
      return res.status(200).json({
        status: "failed",
      });
    }

    return res.status(200).json({
      status: "success",
    });
  } catch (error) {
    return res.status(500).json({
      status: "intrnal-server-error",
    });
  }
};

const fetchOrdersByRestaurent = async () => {
  try {
    const { restaurent } = req.body;

    if (!restaurent) {
      return res.status(200).json({
        status: "missing-restaurent",
        orders: null,
      });
    }

    restaurent = restaurent.trim();

    const orders = await Order.find({
      restaurent: restaurent,
    });

    if (!orders) {
      return res.status(200).json({
        status: "failed",
        orders: [],
      });
    }
    return res.status(200).json({
      status: "success",
      orders: orders,
    });
  } catch (error) {
    return res.status(500).json({
      status: "intrnal-server-error",
      orders: null,
    });
  }
};

module.exports = { placeOrder, fetchOrdersByRestaurent };
