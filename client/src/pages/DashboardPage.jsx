import SearchTile from '../components/SearchTile';
import { LevelsTile } from '../components/LevelsTile';
// import { UseGetAllItems } from '../hooks/UseGetAllItems';
import { FavouriteItem } from '../components/FavouriteItem';
import { useState } from 'react';

export const DashboardPage = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="flex gap-4">
        <section className="flex w-full gap-4 px-4 py-5">
          <FavouriteItem />
          <LevelsTile level={'Critical'} />
        </section>
      </div>
      <SearchTile />
    </div>
  );
};
