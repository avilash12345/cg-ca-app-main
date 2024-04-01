const user_model = require("../models/user.js");
//const create_token = require("../services/token.js");
//const { randomBytes, createHmac } = require("node:crypto");
const jwt = require("jsonwebtoken");
//const phws = require("password-hash-with-salt");
const bcrypt = require("bcrypt");

class user_controllers {
  //get all users
  static get_user_data = async (req, res) => {
    try {
      const data = await user_model.find();
      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  };
  //create user
  static create_user = async (req, res) => {
    const { fullname, email, password } = req.body;
    //const tokendata = create_token(user_model);

    try {
      const doc = await new user_model({
        fullname,
        email,
        password,
      });
      const save_doc = await doc.save();

      const users = await user_model.findOne({ email: email });
      //generating token
      const SECRET_KEY = process.env.JWT_SECRET_KEY;
      const payload = {
        userid: users._id,
        email: users.email,
        fullname: users.fullname,
      };
      const newtoken = jwt.sign(payload, SECRET_KEY, { expiresIn: "1d" }, {});
      return res.status(201).send({
        save_doc,
        message: "Usere Resgistered successfully..",
        token: newtoken,
      });
    } catch (error) {
      console.log(error);
    }
  };
  //login a user
  static userlogin = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (email && password) {
        const users = await user_model.findOne({ email: email });
        if (users != null) {
          const isMatch = await bcrypt.compare(password, users.password);

          // returns true or false
          if (users.email === email && isMatch) {
            //generate token
            const SECRET_KEY = process.env.JWT_SECRET_KEY;
            const payload = {
              userid: users._id,
              email: users.email,
              fullname: users.fullname,
            };
            const token = jwt.sign(
              payload,
              SECRET_KEY,
              { expiresIn: "1d" },
              {}
            );
            return res
              .cookie("access_token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
              })
              .status(200)
              .json({ message: "Logged in successfully 😊 👌" });
          } else {
            res.send({
              status: "failed",
              message: "email or password not valid",
            });
          }
        } else {
          res.send({
            status: "failed",
            message: "You are not registered user",
          });
        }
      } else {
        res.send({ status: "failed", message: "All fields are required" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  //logout a user
  static logout = async (req, res) => {
    try {
      res.clearCookie("access_token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });
      return res.status(200).json({
        message: "Logged out successfully 😊 👌",
      });
    } catch (error) {
      console.log(error);
    }
  };
  static mydata = async (req, res) => {
    try {
      return res.status(200).send("ok running");
    } catch (error) {
      console.log(error);
      return res.status(405).send("Some went wrong in server side...");
    }
  };
}

module.exports = user_controllers;
