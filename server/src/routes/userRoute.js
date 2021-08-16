const express = require("express");
const db = require("../models/index");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await db.user.findOne({ email: email });
    if (result) {
      if (password === result.password) {
        res.send({ message: "login successful", user: result });
      } else {
        res.send({ message: "password didnt matched" });
      }
    } else {
      res.send({ message: "user not registered" });
    }
  } catch (error) {
    console.log(error);
  }
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const result = await db.user.findOne({ email: email });
    if (result) {
      res.status(200).send({ message: "user alredy exists" });
      console.log("already exixts");
    } else {
      try {
        const newUser = new db.user({
          email: email,
          name: name,
          password: password,
        });
        const result = await newUser.save();
        res.status(200).send({ message: "user added" });
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
