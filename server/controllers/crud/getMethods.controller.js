import { supabase } from "../../utils/dbConn.js"

export const getAllItems = async (req, res) => {
  try {
    const { data, error } = await supabase.from("inventory").select();
    console.log(data);
    if (!data) {
      console.log("Empty inventory");

      return res
        .status(400)
        .json({ message: "There are no items in inventory right now" })
    }
    if (error) {
      return res.status(400).json({error})
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

export const getItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const {data, error} = await supabase.from("inventory").select().eq('id',id); //

    if (!data || data.length === 0) {
      console.log("Item not found");
      return res
        .status(409)
        .json({ message: "This item does not exist, please try another id." });
    }
    if (error) {
      return res.status(400).json({error, message: error.message});
    }

    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({ error, message: error.message });
  }
};

export const getItemByName = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(name);

    const { data, error } = await supabase.from("inventory").select().ilike('item_name', `%${name}%`).order("item_name", { ascending: true });

  
    console.log("server-side log: ", data);

    if (!data || data.length === 0) {
      return res.status(400).send({
        message:
          "This item does not exist! Please check spelling or try another item",
      });
    }
    if (error) {
      return res.status(400).json({error, message: error.message});
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error, message: error.message });
  }
};
