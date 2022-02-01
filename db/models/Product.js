const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: { type: String, require: true }, //type & value to add validiation

    description: String,
    color: String,
    quantity: Number,
    price: number,
    //add default value to the price
  },
  { timestamps: true }
);

ProductSchema.plugin(mongooseSlugPlugin, { tmpl: "" });
module.exports = mongoose.module("Product", ProductSchema);
