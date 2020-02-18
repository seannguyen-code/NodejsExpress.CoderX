var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var userRoutes = require("./routes/user.route");
var authRoute = require("./routes/auth.route");

var authMiddleware = require("./middlewares/auth.middleware.js");

var port = 3000;

var app = express();
app.set("view engine", "pug");
app.set("views", "./views");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static("public"));

//Routes
app.get("/", (req, res) => {
  res.render("index.pug", {
    name: "H.Sơn"
  });
});

app.use("/users", authMiddleware.requireAuth, userRoutes);
app.use("/auth", authRoute);

app.listen(port, () => {
  console.log(`Báo cáo sếp. Server đang được phát trên ${port}!`);
});
