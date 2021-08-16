const mongoose = require("mongoose");

const db = {};

db.mongoose = mongoose;
db.user = require("./userModel");

module.exports = db;
