import express from 'express';

export const router = express.Router();

import { createNewItem } from '../controllers/crud/postMethods.controller.js';
import {
  getAllItems,
  getItemById,
  getItemByName,
  getFavouriteItems,
  getItemLevels,
} from '../controllers/crud/getMethods.controller.js';
import { updateItem } from '../controllers/crud/putMethods.controller.js';
import { deleteItem } from '../controllers/crud/deleteMethods.controller.js';

// logic/crud
router.post('/', createNewItem);
router.get('/', getItemByName);
router.get('/favourites', getFavouriteItems);
router.get('/levels', getItemLevels);
router.get('/all', getAllItems);
router.get('/:id', getItemById);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);
