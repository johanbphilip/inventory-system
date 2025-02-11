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
        setIsLoading(false);
        return;
      }
      console.log('UseGetAllFavourites data: ', data);

      setFavouriteItems(data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('An error occured while fetching data');
      setIsLoading(false);
      console.log('Error in UseGetAllFavourites:', error);
      return;
    }
  };
  useEffect(() => {
    getAllFavourites();
  }, []);
  return { favouriteItems, errorMessage, isLoading, getAllFavourites };
};
