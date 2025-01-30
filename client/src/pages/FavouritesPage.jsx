import React from 'react';
import SearchTile from '../components/SearchTile';
// import { UseGetAllItems } from '../hooks/UseGetAllItems';
import { UseGetAllFavourites } from '../hooks/UseGetAllFavourites';

export const FavouritesPage = () => {
  const { favouriteItems, errorMessage, isLoading, getAllFavourites } =
    UseGetAllFavourites();
  return (
    <main className="flex flex-col">
      <div className="flex flex-col p-4">
        <h1 className="font-primary text-5xl font-semibold">Favourites</h1>
        <p className="text-quantGray">View and modify your favourite items.</p>
      </div>
      {favouriteItems && favouriteItems.length > 0 && (
        <SearchTile
          items={favouriteItems}
          tableHeader={'Favourite Items'}
          refreshFunction={getAllFavourites}
          errorMessage={errorMessage}
          isLoading={isLoading}
        />
      )}
    </main>
  );
};
