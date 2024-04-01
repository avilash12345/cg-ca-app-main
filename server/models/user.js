const mongoose = require("mongoose");
const { createHmac, randomBytes } = require("node:crypto");
const bcrypt = require("bcrypt");

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
    salt: {
      type: String,
    },
  },
  { timestamps: true }
);
userschema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return;
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(user.password, salt);
  this.password = hashPassword;
  this.salt = salt;
  next();
});

const user_model = mongoose.model("user_data", userschema);
module.exports = user_model;
