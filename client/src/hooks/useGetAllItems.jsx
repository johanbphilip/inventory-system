import { useEffect, useState } from 'react';
import { server } from '../axios';

export const UseGetAllItems = () => {
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [favouriteItems, setFavouriteItems] = useState([]);

  const getAllItems = async () => {
    try {
      setIsLoading(true);
      const { data, message, valid, error } = (
        await server.get('/api/item/all')
      ).data;
      setIsLoading(false);

      if (error) {
        setErrorMessage(message);
        setIsLoading(false);
        return;
      }
      console.log('UseGetAllItems data: ', data);

      setItems(data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('An error occured while fetching data');
      setIsLoading(false);
      console.log('Error in UseGetAllItems:', error);
      return;
    }
  };

  useEffect(() => {
    getAllItems();
  }, []);
  useEffect(() => {
    setFavouriteItems(items.filter((item) => item.isFavourite === true));
  }, [items]);

  return { items, errorMessage, isLoading, favouriteItems, getAllItems };
};
