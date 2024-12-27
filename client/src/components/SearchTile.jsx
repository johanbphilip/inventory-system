import { useEffect, useState } from 'react';
import { server, createCancelToken } from '../axios';

import SearchTable from './SearchTable';
import SearchBar from './SearchBar';
import axios from 'axios';
import ErrorComponent from './ErrorComponent';

const SearchTile = () => {
  const [searchItems, setSearchItems] = useState(null);
  const [allItems, setAllItems] = useState([]);
  const [cancelToken, setCancelToken] = useState(null);

  // initial load when component is mounted
  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const response = await server.get('/api/items');
        const data = response.data;
        setAllItems(data);
        console.log('data here: ', data);
        console.log('this is fetchAllItems: ', allItems);
      } catch (error) {
        console.log('Error fetching all items', error);
      }
    };
    fetchAllItems();
  }, []);

  // functionality for searching by name entered
  const getItemByName = async (event) => {
    // check if the cancel token has been set
    event.preventDefault();
    try {
      if (cancelToken) {
        // todo: cancel token is not being implemented properly as most requests are not being cancelled
        cancelToken.cancel('Canceling previous request');
      }
      // creates a cancel token source and sets the cancel token
      const source = createCancelToken();
      setCancelToken(source);
      // gets search value from the search bar
      const queryValue = event.target.value;
      // sends request and stores data
      const response = await instance.get(`/api/item/?name=${queryValue}`, {
        cancelToken: source.token,
      });
      const items = response.data;
      setSearchItems(items);

      console.log('this is the current response items', searchItems);
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled: ', error.message);
      }
      if (error.response.status === 400) {
        setSearchItems([]);
      }
      console.log(error.response?.data.message);
    }
  };

  return (
    <div className="m-[10rem] flex w-full flex-grow flex-col items-center">
      <SearchBar
        placeholder="Search inventory items here"
        getItemByName={getItemByName}
      />
      <SearchTable items={searchItems ? searchItems : allItems} />
    </div>
  );
};

export default SearchTile;
