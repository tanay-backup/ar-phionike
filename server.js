const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.static(path.join(__dirname, "/")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/model2", (req, res) => {
  res.sendFile("model2.html");
});

app.get("/model3", (req, res) => {
  res.sendFile("model3.html");
});

app.get("/model4", (req, res) => {
  res.sendFile("model4.html");
});

app.listen(8080, () => {
  console.log("PORT 8080");
});
