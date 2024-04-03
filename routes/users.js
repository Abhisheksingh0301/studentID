var express = require('express');
var moment = require('moment');
var studmstModel = require('../schema/student_master');
var router = express.Router();


var pssm = studmstModel.find({});

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

//Request page
router.get("/abhi", function (req, res, next) {
  res.render("reqpage", {
    title: "Request page",
    headtext: "Welcome to the request page",
    passouts: { name: "aa" },
    reg: "",
    moment: moment,
    curdt: Date.now(),
  });
});


// Search for records [POST method]
router.post("/searchrecords/", function (req, res) {
  var fltrReg = req.body.txtreg;
  console.log("Regno is   " + fltrReg);
  if (fltrReg != "") {
    var fltrParameter = { registrationno: fltrReg }
    console.log(fltrParameter);
  } else {

    var fltrParameter = ({ registrationno: "" });
    console.log("This is else part");
  }
  var studentFilter = studmstModel.find(fltrParameter).sort({"sess":-1});

  //studentFilter.exec(function (err, results) {
  studentFilter.then((passouts) => {
    console.log(passouts);
    //res.send(passouts);
    res.render("reqpage", {
      passouts: passouts,
      headtext: "Welcome to the request page",
      title: "Student details",
      reg: req.body.txtreg,
      moment: moment,
      curdt: Date.now(),
    });
  }).catch((err) => {
    console.log("Error");
  })
});



module.exports = router;
