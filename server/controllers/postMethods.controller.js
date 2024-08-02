const InventoryItem = require("../models/item.models");

const createNewItem =  async (req, res) => {
  try {

    const { name } = req.body;

    const duplicateItem = await InventoryItem.findOne({
      name: { $regex: new RegExp(name, "i") },
    }).exec();

    if (duplicateItem) {
      return res.status(422).send({ message: "This item already exists" });
    }
    const newInventoryItem = await InventoryItem.create(req.body);
    res.status(200).json(newInventoryItem);

    console.log("🚀 ~ createNewItem ~ newInventoryItem:", newInventoryItem)

  } catch (error) {
    res.status(422).json({ message: error.message });
  }
};

module.exports = createNewItem;