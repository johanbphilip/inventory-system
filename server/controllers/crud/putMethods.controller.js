import { supabase } from "../../utils/dbConn.js";

export const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { itemName, quantity, purchasePrice, reorderPoint, storageLocation, category, status  } = req.body;
    // move to frontend
    // let status;
    // if (quantity > watchPoint) {
    //   status = 'High'
    // } else if (quantity = watchPoint){
    //   status = 'Sufficient'
    // } else if (quantity < watchPoint) {
    //   status = 'Low'
    // } else if (quantity === 0) {
    //   status = 'Critical'
    // }
    console.log(itemName, quantity, purchasePrice);

    const {data, error} = await supabase.from("inventory").update( {itemName: itemName, quantity: quantity, purchasePrice: purchasePrice,/**  status: status */ reorderPoint: reorderPoint, status:status, storageLocation:storageLocation, category:category}).eq('id',id).select()

    if (error) {
      console.log(error)
      if(error.code == "23505") {
        return res.status(409).json({ error, message: "An item with this name already exists" })
      }
      
      return res.status(400).json({error, message: error.message})
    }
    
    res.status(200).json(data);

  } catch (error) {
    res.status(500).send({ error, message: error.message });
  }
};
