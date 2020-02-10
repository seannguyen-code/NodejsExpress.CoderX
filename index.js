var express = require("express");
var bodyParser = require("body-parser");
var shortid = require("shortid");
var app = express();
var low = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
var adapter = new FileSync("db.json");

db = low(adapter);

// Set some defaults
db.defaults({ users: [] }).write();

var port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.pug", {
    name: "H.Sơn"
  });
});

app.get("/users", (req, res) => {
  res.render("users/index.pug", {
    users: db.get("users").value()
  });
});

app.get("/users/search", (req, res) => {
  var q = req.query.q;
  var matchedUsers = users.filter(user => {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });

  res.render("users/index.pug", {
    users: matchedUsers
  });
});

app.get("/captain", (req, res) => {
  res.send("<h1>Cái gì, có kẻ giả danh ta sao...</h1>");
});

app.get("/users/create", (req, res) => {
  res.render("users/create.pug");
});

app.get("/users/:id", (req, res) => {
  var id = req.params.id;

  var user = db
    .get("users")
    .find({ id: id })
    .value();

  res.render("users/view", {
    user: user
  });
});

app.post("/users/create", (req, res) => {
  req.body.id = shortid.generate();
  db.get("users")
    .push(req.body)
    .write();
  res.redirect("/users");
});

app.listen(port, () => {
  console.log(`Báo cáo sếp. Server đang được phát trên ${port}!`);
});
