const express = require("express");
const router = express.Router();
const controller = require("../controller/placesController.js");

router.get("/all", controller.getAll);
router.post("/create", controller.createPlace);  
router.get("/search/:id", controller.getById);
router.patch("/update/:id", controller.updatePlace);
router.delete("/delete/:id", controller.deletePlace);

module.exports = router

