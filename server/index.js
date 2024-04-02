const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
require("dotenv").config();
const dburl = process.env.DBURL;
const connecteddb = require("./db/db.js");
const router = require("./routes/router.js");
const cookieParser = require("cookie-parser");
//middleware
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/v1/api/", router);
//database
connecteddb(dburl);
//routes

//listening port server
app.listen(PORT, () => {
  console.log(`Listening server on http://localhost:${PORT}`);
});
