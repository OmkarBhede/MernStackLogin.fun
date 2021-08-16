const db = require("../models/index");

const uri = "mongodb://localhost:27017/mobileno";

const connectDB = async () => {
  try {
    const conn = await db.mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected to : ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;
