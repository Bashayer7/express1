const express = require("express"); //import
const { use } = require("express/lib/application");
const data = require("./data");
const app = express(); // create instance i call it (app)
app.use(express.json()); //it wont accept the request unless i put this code
app.get("/api/data", (req, res) => {
  res.json(data);
});

app.post("/api/data", (req, res) => {
  const id = data.length;
  const newdata = { ...req.body, id: id };
  //or //req.body.id=data.length+1       this is for adding new id for the object
  data.push(newdata);
  res.status(201);
  res.json(newdata); //must do it step
});
app.delete("/data/:dataId", (req, res) => {
  //we are sending reuest to backed to look for data id so we can delete it
  //: it means make data id daynmic
  const { dataId } = req.params;
  //   const dataid=req.params.dataid
  const foundData = data.find((data) => data.id === +data);
  if (foundData) {
    const d = data.filter((data) => data.id !== +dataId);
    data = d;
    res.status(204).end();
  } else {
    res.status(204).end();
  }

  res.json(d);
  //if i want to add a status
  //   res.json(204).end();
});

app.listen(8000, () => {
  //last thing in the code
  console.log("the app is running on localhost 8000"); //to make sure it works or no
});
