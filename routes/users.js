const express = require("express");
const bodyParser = require("body-parser");
const { initDB, conn } = require("../dbconnect");
var router = express.Router();

// Starting our app.
const app = express();

app.use(express.json());

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));

// console.log(initDB(conn)) 
router.get("/", (req, res) => {
    conn.query("SELECT * FROM users", function (error, rows, fields) {
        if (error){
            res.status(500).send({error: 'something wrong'})
        }else{
            res.send(rows);
            //  res.render("users",{data:rows}) // to render data in html page
            //  res.json(rows);
            //  console.log(rows)
        }
         
    });
});



module.exports = router;