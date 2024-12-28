import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import { server } from '../axios';
import { CgSortAz } from 'react-icons/cg';
import { MdOutlineSort } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

import { GoPlus } from 'react-icons/go';

import { FaPlus } from 'react-icons/fa6';
import { SearchTable } from '../components/SearchTable';
// import { useGetAllItems } from '../hooks/useGetAllItems';

const SearchTile = () => {
  // const { items, errorMessage, isLoading } = useGetAllItems();
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllItems = async () => {
      try {
        setIsLoading(true);
        const { data, message, valid, error } = (
          await server.get('/api/item/all')
        ).data;
        // const { data, valid, message } = response;
        setIsLoading(false);

        if (error) {
          setErrorMessage(message);
          return;
        }
        console.log(data);
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
    getAllItems();
  }, []);

  return (
    <div className="m-[10rem] flex w-full flex-grow flex-col items-center">
      <div className="flex w-full items-center justify-between">
        <h2 className="px-4 text-2xl font-bold">Items</h2>
        <div className="flex gap-4">
          <button className="flex items-center justify-center gap-2 rounded-md bg-gray-400 px-4 text-base font-thin">
            <MdDelete className="size-5" />
            Delete
          </button>
          <button className="flex items-center justify-center gap-2 rounded-md bg-gray-400 px-4 text-base font-thin">
            <MdOutlineSort className="size-5" />
            Sort by
          </button>
          <SearchBar placeholder="Search here" />
          <button className="flex items-center justify-center gap-2 rounded-md bg-gray-400 px-4 text-base font-thin">
            {' '}
            <GoPlus className="size-5" />
            Add new
          </button>
        </div>
      </div>
      {isLoading && <p>Finding data...</p>}
      {items && items.length > 0 && <SearchTable items={items} />}

      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default SearchTile;
