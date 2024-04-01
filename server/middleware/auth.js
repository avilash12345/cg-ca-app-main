const jwt = require("jsonwebtoken");

const auth_user = async (req, res, next) => {
  const token = req.cookies;
 return res.status(201).send({"token":token})

};

module.exports = auth_user;
