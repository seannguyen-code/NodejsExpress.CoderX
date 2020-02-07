const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index.pug", {
    name: "H.Sơn"
  });
});

app.get("/users", (req, res) => {
  res.render("users/index.pug", {
    users: [
      { id: 1, name: "Yasuo" },
      { id: 2, name: "Luffy" }
    ]
  });
});

app.get("/captain", (req, res) => {
  res.send("<h1>Cái gì, có kẻ giả danh ta sao...</h1>");
});

app.listen(port, () => {
  console.log(`Báo cáo sếp. Server đang được phát trên ${port}!`);
});
