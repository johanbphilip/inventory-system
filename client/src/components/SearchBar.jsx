import { IoIosSearch } from 'react-icons/io';

export const SearchBar = ({ placeholder, getItemByName, query }) => {
  return (
    <div className="focus:border-quantHighlight flex flex-row items-center justify-center gap-2 rounded-md border px-3 align-middle">
      <IoIosSearch className="size-5" />
      <input
        type="search"
        value={query}
        placeholder={placeholder}
        className="w-full rounded-md border-solid border-red-500 px-3 py-1 font-thin focus:outline-none"
        // onChange={(event) => getItemByName(event)}
      ></input>
    </div>
  );
};
