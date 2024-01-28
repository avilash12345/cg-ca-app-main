//create token
const jwt = require("jsonwebtoken");
const user = require("../models/user.js");
function creater_token() {
  const SECRET_KEY = "Avilash123789abc@#$%122fjhfh";
  jwt.sign(
    { userid: user._id },
    SECRET_KEY,
    { algorithm: "SHA256" },
    function (err, token) {
      console.log(token);
    }
  );
}

function validate_token() {
  const email = user.findOne("email");
  if (!email) {
    console.log("Not a register user,please register and go further");
  } else {
    jwt.verify();
  }
}
