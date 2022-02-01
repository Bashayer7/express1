const express = require("express"); //import
const res = require("express/lib/response");

// const { use } = require("express/lib/application");
// const data = require("./data");
const port = 8000;
const app = express();
const dataRoutes = require("./api/products/routes");
const product = require("./db/models/product");
app.use(express.json());
//coslg 4 methods
app.use((req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}${req.hostname}${port} ${req.originalUrl}`
  );
  next();
});
//router
app.use("/product", productRoutes);
app.use((req, res) => {
  res.status(404).json({ message: "Path Not Found" });
});

//error middle ware that takes 4 parameters
app.use((error, req, res, next) => {
  res
    .status(error.status || 500)
    .json({ message: error.message || "internal issue" });
  next();
  //we have to put cuz somtimes
  // the error has no status or msg
});

connectDB();
router.listen(8000, () => {
  console.log("the app is running on localhost 8000"); //to make sure it works or no
});
