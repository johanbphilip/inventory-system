const express = require('express');
const router = express.Router();

const createNewItem  = require("../controllers/postMethods.controller")
const { getItemById, getItemByName } = require('../controllers/getMethods.controller')
const updateItem = require("../controllers/putMethods.controller")
const deleteItem  = require("../controllers/deleteMethods.controller")


router.post('/', createNewItem);
router.get('/:id', getItemById);
router.get('/', getItemByName);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

module.exports = router;