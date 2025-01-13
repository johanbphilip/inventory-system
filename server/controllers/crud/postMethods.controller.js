import { supabase } from "../../utils/dbConn.js";

export const createNewItem = async (req, res) => {
  try {
    const { itemName, quantity, purchasePrice, reorderPoint, category, storageLocation, status, statusColor  } = req.body;


    const { data, error } = await supabase.from("inventory").insert({itemName: itemName, quantity: quantity, purchasePrice: purchasePrice, status: status,reorderPoint: reorderPoint, category:category, storageLocation:storageLocation, statusColor:statusColor }).select("*")
    console.log(data)

    if (error) {
      console.log(error)
      if(error.code == "23505") {
        return res.status(409).json({ error, message: "An item with this name already exists" })
      }
      return res.status(400).json({error})
    }
    
    console.log(data);
    return res.status(201).json({data, message: `Item added to inventory successfully`});

  } catch (error) {
    console.log(error)
    return res.status(500).json( error);
  }
};
