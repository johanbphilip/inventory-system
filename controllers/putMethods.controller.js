const InventoryItem = require("../models/item.models");

const updateItem = async (req, res) => {
  try {

    const { id } = req.params;
    const { name, quantity, "Purchase Price": purchasePrice } = req.body;
    console.log(name, quantity, purchasePrice)
    
    const duplicate = await InventoryItem.findOne({ name: name });

    if (duplicate && duplicate._id.toString() !== id) {
      console.log(`Duplicate ID: ${duplicate._id}, name: ${duplicate.name}`);
      console.log(`Requesting ID: ${id}`);
      console.log('A duplicate exists with a different ID')
      
      return res.status(400).json({ message: "An item with this name already exists" });
    }
    
    const updatedItem = await InventoryItem.findByIdAndUpdate(
      id , { name, quantity, purchasePrice }, { new: true }
    );
    res.status(200).json(updatedItem);

    console.log(updatedItem);

  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = updateItem;