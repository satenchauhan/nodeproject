var express = require("express");
var app = express();
var path = require("path");

// var routes = require("./routes");
// var indexRouter = require('./routes/index')
var usersRouter = require("./routes/users");
var clientsRouter = require("./routes/clients");

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname,"views"));

app.set("view engine", "ejs");
// app.use(routes)

// app.use('./', indexRouter);
app.use('/users',usersRouter);
app.use('/clients',clientsRouter);

app.use( express.static("public"));


app.listen(app.get("port"), () =>{
    console.log("server started " + app.get("port"));
    console.log("Go to http://localhost:" + app.get("port"));
});

