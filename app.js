const express = require("express"); //import
const data = require("./data");
const app = express(); // create instance i call it (app)
app.get("/api/data", (req, res) => {
  res.json(data);
});
app.listen(8000, () => {
  console.log("the app is running on localhost 8000"); //to make sure it works or no
});
