import { supabase } from '../../utils/dbConn.js';

export const getAllTransactions = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('transactions')
      .select()
      .order('createdAt', { ascending: true });

    if (error) {
      console.log(error);
      return res.status(400).json({ error, message: error.message });
    }
    return res.status(200).json({ data, message: 'All Transactions sent' });
  } catch (error) {
    return res.status(400).json({ error, message: error.message });
  }
};
