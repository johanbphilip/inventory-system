import { useEffect, useState } from 'react';
import { server } from '../axios';

export const useGetAllItems = async () => {
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllItems = async () => {
      try {
        setIsLoading(true);
        const { data, message, valid, error } = (
          await server.get('/api/item/all')
        ).data;
        // const { data, valid, message } = response;
        setIsLoading(false);

        if (error) {
          setErrorMessage(message);
          return;
        }
        console.log(data);
        console.log('data is valid: ', data);

        setItems(data);
        setErrorMessage('');
      } catch (error) {
        setIsLoading(false);
        setErrorMessage('An error occured while fetching data');
        console.log(error);
        return;
      }
    };
    getAllItems();
  }, []);

  return { items, errorMessage, isLoading };
};
