import { useEffect, useState } from 'react';
import { server } from '../axios';

export const UseGetItemLevels = () => {
  const [itemLevels, setItemLevels] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getItemLevels = async () => {
    try {
      setIsLoading(true);
      const { levels, message, error } = (await server.get('/api/item/levels'))
        .data;
      setIsLoading(false);
      if (error) {
        setErrorMessage(message);
        return;
      }
      console.log('UseGetItemLevels data: ', levels);

      setItemLevels(levels);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('An error occured while fetching data');
      setIsLoading(false);
      console.log('Error in UseGetItemLevels:', error);
      return;
    }
  };
  useEffect(() => {
    getItemLevels();
  }, []);
  return { itemLevels, errorMessage, isLoading, getItemLevels };
};
