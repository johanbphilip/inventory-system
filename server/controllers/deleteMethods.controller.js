const InventoryItem = require("../models/item.models");

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedItem = await InventoryItem.findByIdAndDelete(id);
    res.status(200).json(deletedItem);

    console.log(deletedItem)

  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

module.exports = deleteItem;