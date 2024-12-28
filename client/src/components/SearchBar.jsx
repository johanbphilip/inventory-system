import { IoIosSearch } from 'react-icons/io';

const SearchBar = ({ placeholder, getItemByName, query }) => {
  return (
    <div className="flex flex-row items-center justify-center gap-2 rounded px-4 py-1 align-middle">
      <IoIosSearch className="size-6" />
      <input
        type="search"
        value={query}
        placeholder={placeholder}
        className="w-full border-solid border-red-500 px-4 py-1 font-thin"
        // onChange={(event) => getItemByName(event)}
      ></input>
    </div>
  );
};

export default SearchBar;
