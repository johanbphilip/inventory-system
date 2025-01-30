import { supabase } from '../../utils/dbConn.js';

export const transactionLogger = async (
  itemId,
  itemName,
  actionType,
  oldData,
  newData,
) => {
  try {
    const { error } = await supabase.from('transactions').insert({
      actionType: actionType,
      itemId: itemId,
      itemName: itemName,
      oldData: oldData,
      newData: newData,
    });

    if (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
