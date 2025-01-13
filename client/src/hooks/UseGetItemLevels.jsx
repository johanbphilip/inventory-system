import React, { useEffect, useState } from 'react';
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
      console.log('data is valid: ', levels);

      setItemLevels(levels);
      setErrorMessage('');
    } catch (error) {
      setIsLoading(false);
      setErrorMessage('An error occured while fetching data');
      console.log(error);
    }
  };
  useEffect(() => {
    getItemLevels();
  }, []);
  return { itemLevels, errorMessage, isLoading, getItemLevels };
};
