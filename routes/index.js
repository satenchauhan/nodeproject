var express = require("express");
var router = express.Router();

router.get("/", (req, res) => {
    res.render('index');
    // console.log("Hello I am here for mysql database");
});


module.exports = router;