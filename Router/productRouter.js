const express = require("express");
const productController = require("./../Controller/productController");
const router = express.Router();

router.route("/")
.get(productController.allProduct)
.post(productController.saveProduct);




router
  .route("/:id")
  .put(productController.editProduct)
  .delete(productController.deleteProduct)
  .get(productController.findProduct);

module.exports = router;
