import express from "express";

import productsController from "../controllers/products.js";

const router = express.Router();

router.route("/").get(productsController.get);
router.route("/:id/buy").post(productsController.buy);

export default router;
