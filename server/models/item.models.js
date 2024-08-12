const mongoose = require("mongoose");

const InventoryItemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name for the inventory item"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter the current stock in the inventory"],
    },
    purchasePrice: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const InventoryItem = mongoose.model("Inventory Item", InventoryItemSchema);
module.exports = InventoryItem;
