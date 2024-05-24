const User = require("../models/User");

const signUp = async (req, res) => {
  try {
    const { email, fullName, password } = req.body;

    if (!email || !fullName || !password) {
      return res.status(200).json({
        status: "all-fields-required",
      });
    }

    const creatdUser = await User.create({
      email,
      fullName,
      password: password,
    });

    if (!creatdUser) {
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

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(200).json({
        status: "all-fields-required",
        user: null,
      });
    }

    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      return res.status(200).json({
        status: "User not found",
        user: null,
      });
    }

    if (user.password !== password) {
      return res.status(200).json({
        status: "Incorrect password",
        user: null,
      });
    }

    return res.status(200).json({
      status: "success",
      user: {
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: "internal-server-error",
      user: null,
    });
  }
};

module.exports = { login, signUp };
