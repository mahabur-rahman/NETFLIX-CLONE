const mongoose = require("mongoose");
const DB = process.env.MONGO_URL;

// connect to db
const connectedDB = async () => {
  const conn = await mongoose.connect(DB);
  try {
    console.log(`MongoDB connected : ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.log(`No connection : ${err}`.cyan.red);
  }
};

// export
module.exports = connectedDB;
