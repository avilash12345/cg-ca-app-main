const mongoose = require("mongoose");
const { createHmac } = require("node:crypto");

const userschema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: {
      type: String,
    },
  },
  { timestamps: true }
);
userschema.pre("save", function (next) {
  const secret = "abcdefg";
  const hash = createHmac("sha256", secret)
    .update("I love cupcakes")
    .digest("hex");
  next();
});

const user_model = mongoose.model("user_data", userschema);
module.exports = user_model;
