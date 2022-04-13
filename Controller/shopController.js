const Shop = require("./../Model/shopModel");

exports.allShop = (req, res) => {
    res.status(400).json({
         message: res.message 
        });
};

exports.saveShop = (req, res) => {
    res.status(400).json({
        message: res.message 
       });
};

exports.editShop = (req, res) => {
  res.status(200).json({
    message: "Shop Edited",
  });
};

exports.deleteShop = (req, res) => {
  res.status(200).json({
    message: "Shop Deleted",
  });
};

exports.findShop = (req, res) => {
    res.status(400).json({
        message: res.message 
       });
};