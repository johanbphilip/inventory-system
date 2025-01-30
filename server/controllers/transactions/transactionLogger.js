import { supabase } from '../../utils/dbConn.js';

export const transactionLogger = async (
  itemId,
  itemName,
  actionType,
  newData,
) => {
  try {
    const { error } = await supabase.from('transactions').insert({
      actionType: actionType,
      itemId: itemId,
      itemName: itemName,
      newData: newData,
    });
    console.log('inside transactionLogger');
    if (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
