const express = require("express");
const shopController = require("./../Controller/shopController");
const router = express.Router();

router.route("/")
.get(shopController.allShop)
.post(shopController.saveShop);




router
  .route("/:id")
  .put(shopController.editShop)
  .delete(shopController.deleteShop)
  .get(shopController.findShop);

module.exports = router;
