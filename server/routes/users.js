var express = require("express");
var router = express.Router();
var cors = require("cors");
const fs = require("fs");

const path = require("path");

/* GET users listing. */
router.get("/", cors(), function (req, res, next) {
  const pathFile = path.join(__dirname, "user.json");

  console.log("=========> COME ", pathFile);
  fs.readFile(pathFile, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    }
    try {
      console.log("=========> <read> ", data);
      const jsonValue = JSON.parse(data);
      res.status(200).json(jsonValue);
    } catch (error) {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    }
  });
});

module.exports = router;
