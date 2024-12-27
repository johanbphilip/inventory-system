import { supabase } from "../../utils/dbConn.js";

export const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, quantity, purchasePrice } = req.body;
    console.log(name, quantity, purchasePrice);

    const {data, error} = await supabase.from("inventory").update( {item_name: name, quantity: quantity, purchase_price: purchasePrice,  }).eq('id',id).select()

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
