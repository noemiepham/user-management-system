var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.status(200).json({
    id: 1,
    firstName: "Terry",
    lastName: "Medhurst",
    maidenName: "Smitham",
    age: 50,
    gender: "male",
    email: "atuny0@sohu.com",
    phone: "+63 791 675 8914",
    username: "atuny0",
    password: "9uQFF1Lh",
    birthDate: "2000-12-25",
    image: "https://robohash.org/hicveldicta.png",
    bloodGroup: "A−",
    height: 189,
    weight: 75.4,
    eyeColor: "Green",
    hair: {
      color: "Black",
      type: "Strands",
    },
  });
});

module.exports = router;
