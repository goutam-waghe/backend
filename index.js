const express = require("express");
require("dotenv").config();
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("jay shree mahakal");
});
app.get("/login", (req, res) => {
  res.send("login");
});
app.get("/youtubre", (req, res) => {
  res.send("youutube");
});
app.listen(process.env.PORT, () => {
  console.log(`sever is worikng on ${process.env.PORT}`);
});
