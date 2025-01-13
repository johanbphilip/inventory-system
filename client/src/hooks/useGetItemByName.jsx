import { server, createCancelToken } from '../axios';

export const UseGetItemByName = async (event) => {
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
    const response = await server.get(`/api/item/?name=${queryValue}`, {
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
  return <div>getItemByName</div>;
};
