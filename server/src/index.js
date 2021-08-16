const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config.js/db");

const user = require("./routes/userRoute");

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


connectDB();

app.use("/auth", user);

app.get("/", (req, res) => {
  res.send("home");
});

app.listen(PORT, () => {
  console.log(`Listning to port : ${PORT}`);
});
