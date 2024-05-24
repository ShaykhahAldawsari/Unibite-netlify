const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const { PORT } = require("./constants/app");
const { MONGODB_URI } = require("./constants/database");

const app = express();

app.use(express.json());

const allowedOrigins = ["http://localhost:3000", "*"];

app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to unibite backend");
});

app.use("/cart", require("./routes/cartItemRoutes"));

app.use("/auth", require("./routes/authRoutes"));

app.use("/items", require("./routes/menuRoutes"));

app.use("/cafes", require("./routes/cafeRoutes"));

mongoose.connect(MONGODB_URI, {}).then(() => {
  console.log("Connected to MongoDB");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
