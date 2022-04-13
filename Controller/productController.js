const Product = require("./../Model/productModel");

exports.allProduct = (req, res) => {
    res.status(400).json({
         message: res.message 
        });
};

exports.saveProduct = (req, res) => {
    res.status(400).json({
        message: res.message 
       });
};

exports.editProduct = (req, res) => {
  res.status(200).json({
    message: "Product Edited",
  });
};

exports.deleteProduct = (req, res) => {
  res.status(200).json({
    message: "Product Deleted",
  });
};

exports.findProduct = (req, res) => {
    res.status(400).json({
        message: res.message 
       });
};