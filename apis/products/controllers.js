//all functions

const res = require("express/lib/response");
let data = require("../../data");
const product = require("../../db/models/product");

exports.fetchData = async (req, res) => {
  try {
    const data = await product.fimd({}).select("name description color proce");
    res.json(data);
  } catch (error) {
    next(error);
  }
};
exports.postData = async (req, res) => {
  try {
    const newData = await { ...req.body, id: data.length + 1 };
    data.push(newData);
  } catch (error) {
    next(error);
  }
};
exports.deleteData = async (req, res) => {
  try {
    const { dataId } = await req.params;
  } catch (error) {
    next(error);
  }
};
exports.updateData = async (req, res) => {
  try {
    const { dataId } = req.params;
    const d = await data.findByIdAndUpdate(
      { _id: dataId },
      req.body
      // {new: true,runvalidator:true} //means that take the new value
    );
    if (d) res.json(d);
    else res.status(404).end();
  } catch (error) {
    next(error);
  }
};
