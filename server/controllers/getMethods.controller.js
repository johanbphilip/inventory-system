const InventoryItem = require("../models/item.models");

const getAllItems = async (req, res) => {
  try {

    const inventoryItems = await InventoryItem.find({}); // find all items

    if (!inventoryItems) {
      console.log("Empty inventory")

      return res.status(400).json({message: "There are no items in inventory right now"}).exec();
    }
    res.status(200).json(inventoryItems);

    console.log(inventoryItems);

  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getItemById = async (req, res) => {
  try {

    const { id } = req.params;
    const item = await InventoryItem.findById(id).exec(); // 

    if (!item) {
      console.log("item not found")
      return res.status(400).json({message: 'This item does not exist, please try another id.'})
    }
    res.status(200).json(item);

    console.log(item);

  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const getItemByName = async (req, res) => {
  try {

    const { name } = req.body;

    const item = await InventoryItem.find({ name: { $regex: new RegExp(name, "i") } }).exec();

    if (item.length === 0) {
      return res.status(400).send({
        message:"This item does not exist! Please check spelling or try another item"
      });
    }
    res.status(200).json(item);

    console.log(item);

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllItems, getItemById, getItemByName};
