import { IoIosSearch } from "react-icons/io";

const SearchBar = ({ placeholder }) => {
  return (
    <div className="flex flex-row justify-center align-middle gap-2 items-center shadow-sm shadow-neutral-600 w-[90%] rounded p-2">
      <IoIosSearch className="w-10 h-10 p-2 rounded-full hover:bg-slate-400" />
      <input
        placeholder={placeholder}
        className="h-8 p-2 border-solid border-red-500 w-full"
      ></input>
    </div>
  );
};

export default SearchBar;
