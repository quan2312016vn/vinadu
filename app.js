let express = require("express");
let fs = require("fs");
let getInfo = require("./getInfo.js")
let app = express();
let bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({extended: false});
let database = [];
app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/success", urlencodedParser, (req, res) => {
  res.render("success", {data: req.body});
  database.push(req.body);
});
app.get("/database", (req, res) => {
  let data = "";
  database.forEach(item => {
    data += getInfo(item) + "<br>";
  });
  res.send(data);
});
app.get("/deletedata", (req, res) => {
  database = [];
  res.send("Deleted database!!!");
});
app.listen(process.env.PORT || 1337);
