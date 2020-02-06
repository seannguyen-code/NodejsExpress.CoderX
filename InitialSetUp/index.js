const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Báo cáo sếp. Đã nhận được lệnh!</h1>");
});

app.get("/captain", (req, res) => {
  res.send("<h1>Cái gì, có kẻ giả danh ta sao...</h1>");
});

app.listen(port, () => {
  console.log(`Báo cáo sếp. Server đang được phát trên ${port}!`);
});
