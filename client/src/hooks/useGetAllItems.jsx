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
        return;
      }
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

  useEffect(() => {
    getAllItems();
  }, []);
  useEffect(() => {
    setFavouriteItems(items.filter((item) => item.isFavourite === true));
  }, [items]);

  return { items, errorMessage, isLoading, favouriteItems, getAllItems };
};
