const mongoose = require("mongoose");
const dotenv = require("dotenv");

try {
  dotenv.config();
  console.log("Success")
} catch (error) {
  console.error("Error loading .env file:", error);
}

const Connection = async () => {
  // const { DB_USERNAME, DB_PASSWORD } = process.env;
  // console.log(DB_PASSWORD);
  const URL = `mongodb+srv://pyqplatform:4lvW8IbQPvKRETfB@cluster0.3tzpejq.mongodb.net/curd_ems?retryWrites=true&w=majority&appName=Cluster0`;


  try {
    await mongoose.connect(URL, {
      // useUnifiedTopology: true,
      // useNewUrlParser: true,
    });
    console.log("Db Connection Successfully");
  } catch (error) {
    console.log("Connection Error with Database", error);
  }
};

module.exports = Connection;
