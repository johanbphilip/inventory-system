import React from 'react';
import SearchTile from '../components/SearchTile';
import { UseGetAllItems } from '../hooks/UseGetAllItems';

export const AllProductsPage = () => {
  const { items, errorMessage, isLoading, getAllItems } = UseGetAllItems();

  return (
    <main className="flex flex-col">
      <div className="flex flex-col p-4">
        <h1 className="font-primary text-5xl font-semibold">All Products</h1>
        <p className="text-quantGray">View and modify your inventory here.</p>
      </div>
      {items && items.length > 0 && (
        <SearchTile
          items={items}
          errorMessage={errorMessage}
          isLoading={isLoading}
          refreshFunction={getAllItems}
          tableHeader={'All Items'}
        />
      )}
    </main>
  );
};
