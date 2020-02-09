const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var users = [
  { id: 1, name: "Yasuo" },
  { id: 2, name: "Luffy" },
  { id: 3, name: "Zoro" },
  { id: 4, name: "Naruto" },
  { id: 5, name: "Sasuke" }
];

app.get("/", (req, res) => {
  res.render("index.pug", {
    name: "H.Sơn"
  });
});

app.get("/users", (req, res) => {
  res.render("users/index.pug", {
    users: users
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

app.post("/users/create", (req, res) => {
  users.push(req.body);
  res.redirect("/users");
});

app.listen(port, () => {
  console.log(`Báo cáo sếp. Server đang được phát trên ${port}!`);
});
