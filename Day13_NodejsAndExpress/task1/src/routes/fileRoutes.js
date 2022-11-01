import express from "express";

import fileController from "../controllers/fileController.js";

const router = express.Router();

router.route("/").get(fileController.get);
router.route("/:filename").get(fileController.getOne);

export default router;
