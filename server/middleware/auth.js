const jwt = require("jsonwebtoken");

const auth_user = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(401).send("Unauthorized user.....");
  } else {
    try {
      const data = await jwt.verify(token, process.env.JWT_SECRET_KEY);
      return next();
    } catch (error) {
      return res
        .status(501)
        .send({ status: "Failed", message: "unauthorized user data..." });
    }
  }
};

module.exports = auth_user;
