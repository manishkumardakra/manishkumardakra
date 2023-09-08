const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, function () {
  console.log(
    "server in online and leationing ur code thank u for make attention on me at @@port No 3000"
  );
});
app.post("/", function (req, res) {
  res.send("thaks i m with u dont afaired");
});
