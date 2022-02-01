const express = require("express");
const data = require("../../products");
const { deleteData } = require("./controllers");
const router = express.Router();

const { fetchData, createData, deleteData } = require("./controllers");

router.get("/", fetchData);

router.post("/", createData);

router.delete("/:dataId", deleteData);

module.exports = router;
