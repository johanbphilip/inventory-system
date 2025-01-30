import { supabase } from '../../utils/dbConn.js';

export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    const { data, error } = await supabase
      .from('inventory')
      .delete()
      .eq('id', id)
      .select();

    if (error) {
      return res.status(400).json({ error, message: error.message });
    }

    return res.status(200).json({ data, message: 'Successfully deleted' });
  } catch (error) {
    return res.status(400).send({ error, message: error.message });
  }
};
