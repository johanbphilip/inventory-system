import SearchTile from '../components/SearchTile';
import { LevelsTile } from '../components/LevelsTile';
// import { UseGetAllItems } from '../hooks/UseGetAllItems';
import { FavouriteItem } from '../components/FavouriteItem';
import { UseGetAllItems } from '../hooks/UseGetAllItems';

export const DashboardPage = () => {
  const { items, errorMessage, isLoading, getAllItems } = UseGetAllItems();
  console.log(items);
  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col p-4">
        <h1 className="font-primary text-5xl font-semibold">Dashboard</h1>
        <p className="text-quantGray">
          Hello --insert user name here--, welcome to Quantify!
        </p>
      </div>
      <section className="flex w-full gap-4 p-4">
        <FavouriteItem />
        <LevelsTile level={'Critical'} />
      </section>
      {items && items.length > 0 && (
        <SearchTile
          items={items}
          errorMessage={errorMessage}
          isLoading={isLoading}
          refreshFunction={getAllItems}
          tableHeader={'All Items'}
        />
      )}
    </div>
  );
};
