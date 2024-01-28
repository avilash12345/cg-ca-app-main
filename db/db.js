const mongoose = require("mongoose");

const connecteddb = async (dburl) => {
  try {
    await mongoose.connect(dburl);
    console.log("database connected successfully.....");
  } catch (e) {
    console.log(e);
  }
};

module.exports = connecteddb;
