const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Báo cáo sếp. Đã nhận được lệnh!");
});

app.listen(port, () => {
  console.log("Báo cáo sếp. Server đang phát!");
});
