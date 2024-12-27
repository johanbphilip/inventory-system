import express from "express";

export const router = express.Router();

import { createNewItem } from "../controllers/crud/postMethods.controller.js";
import {
  getItemById,
  getItemByName,
} from "../controllers/crud/getMethods.controller.js";
import { updateItem } from "../controllers/crud/putMethods.controller.js";
import { deleteItem } from "../controllers/crud/deleteMethods.controller.js";

// logic/crud
router.post("/", createNewItem);
router.get("/:id", getItemById);
router.get("/", getItemByName);
router.put("/:id", updateItem);
router.delete("/:id", deleteItem);
