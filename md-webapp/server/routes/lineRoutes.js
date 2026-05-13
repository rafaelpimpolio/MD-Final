import express from "express";

import { getLines } from "../controllers/lineController.js";

const router = express.Router();

router.get("/", getLines);

export default router;