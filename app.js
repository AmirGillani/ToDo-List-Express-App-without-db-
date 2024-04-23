const express = require("express");
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.listen(3000, function () { console.log("Server Started"); });

const items = [];

const workItems = [];

//date is object having getdate method
const currentDate = require(__dirname + "/date.js");
let day = "";
app.get("/", function (req, res) {

    day = currentDate.getDate();
    res.render('index', { currentDay: day, item: items });
});
app.post("/", function (req, res) {
    var item = req.body.newItem;

    if (req.body.list == "work") {
        workItems.push(item);
        res.redirect("/work");
    } else { items.push(item); }
    res.redirect("/");
});

app.get("/work", function (req, res) {

    const day= currentDate.getDay();
    res.render('index', { currentDay: "Work To Do "+ day, item: workItems });
});
app.post("/work", function (req, res) {
    const item = req.body.newItem;
    workItems.push(item);
    res.redirect("/");
});
