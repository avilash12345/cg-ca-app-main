const mongoose = require("mongoose");

const detailschema = new mongoose.Schema(
  {
    state: {
      type: String,
      unique: true,
      required: true,
    },
    capital: {
      type: String,
      required: true,
    },
    chief_minister: {
      type: String,
      required: true,
    },
    governor: {
      type: String,
      required: true,
    },
    userid: {
      type: mongoose.Schema.ObjectId,
      ref: "user_model",
    },
  },
  { timestamps: true }
);

const detail_model = mongoose.model("details_data", detailschema);
module.exports = detail_model;
