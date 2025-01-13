import { useEffect, useState } from 'react';
import { server } from '../axios';

export const UseGetAllFavourites = () => {
  const [favouriteItems, setFavouriteItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getAllFavourites = async () => {
    try {
      setIsLoading(true);
      const { data, message, error } = (
        await server.get('/api/item/favourites')
      ).data;
      setIsLoading(false);
      if (error) {
        setErrorMessage(message);
        return;
      }
      console.log('data is valid: ', data);

      setFavouriteItems(data);
      setErrorMessage('');
    } catch (error) {
      setIsLoading(false);
      setErrorMessage('An error occured while fetching data');
      console.log(error);
    }
  };
  useEffect(() => {
    getAllFavourites();
  }, []);
  return { favouriteItems, errorMessage, isLoading, getAllFavourites };
};
