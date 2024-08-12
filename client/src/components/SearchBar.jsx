import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { instance } from "../axios";

const SearchBar = ({ placeholder }) => {
  const [currentItems, setCurrentItems] = useState([]);

  const handleItemSearch = async () => {
    const response = await instance.get("/api/items");
    const items = response.data;
    setCurrentItems((currentState) => [...currentState, items]);
    // note that currently teh state is being added to everytime there is a change in teh search, thats fine for now, but later, when on default, we watn all the items shown in alpha order
    // then when the search is going on, we can replace the entire state with the newest response (aka theres no need to spread currentState and then append, just complete replace)
    console.log(currentItems);
  };

  return (
    <div className="flex flex-row justify-center align-middle gap-2 items-center shadow-sm shadow-neutral-600 w-[90%] rounded p-2">
      <IoIosSearch className="w-10 h-10 p-2 rounded-full hover:bg-slate-400" />
      <input
        type="search"
        placeholder={placeholder}
        className="h-8 p-2 border-solid border-red-500 w-full"
        onChange={() => handleItemSearch()}
      ></input>
    </div>
  );
};

export default SearchBar;
