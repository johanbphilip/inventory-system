import React from 'react';
import SearchTile from '../components/SearchTile';
// import { UseGetAllItems } from '../hooks/UseGetAllItems';
import { UseGetAllFavourites } from '../hooks/UseGetAllFavourites';

export const FavouritesPage = () => {
  const { favouriteItems } = UseGetAllFavourites();
  return (
    <SearchTile
      favouriteItems={favouriteItems}
      tableHeader={'Favourite Items'}
    />
  );
};
