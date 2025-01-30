import { useEffect, useState } from 'react';
import { server } from '../axios';

export const UseGetAllTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getAllTransactions = async () => {
    try {
      setIsLoading(true);
      const { data, message, error } = (
        await server.get('/api/transactions/all')
      ).data;

      if (error) {
        setErrorMessage(message);
        setIsLoading(false);
        return;
      }
      console.log('UseGetAllItems data: ', data);
      setTransactions(data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('An error occured while fetching data');
      setIsLoading(false);
      console.log('Error in UseGetAllTransactions:', error);
      return;
    }
  };

  useEffect(() => {
    getAllTransactions();
  }, []);

  return { transactions, errorMessage, isLoading, getAllTransactions };
};
