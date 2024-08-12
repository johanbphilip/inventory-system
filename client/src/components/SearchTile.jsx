import { useEffect, useState } from "react";
import { instance } from "../axios";
import SearchTable from "./SearchTable";
import SearchBar from "./ui/SearchBar";

const SearchTile = () => {
  const [currentItems, setCurrentItems] = useState([]);
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    const fetchAllItems = async () => {
      try {
        const response = await instance.get("/api/items");
        const data = response.data;
        setAllItems(data);
        console.log(data);
        console.log("this is fetchAllItems: ", allItems);
      } catch (error) {
        console.log("Error fetching all items", error);
      }
    };
    fetchAllItems();
  }, []);

  const handleItemSearch = async () => {
    const response = await instance.get("/api/item/");
    const items = response.data;
    setCurrentItems(items);
    // note that currently teh state is being added to everytime there is a change in teh search, thats fine for now, but later, when on default, we want all the items shown in alpha order
    // then when the search is going on, we can replace the entire state with the newest response (aka theres no need to spread currentState and then append, just complete replace)
    console.log(currentItems);
  };
  return (
    <div className="flex flex-col m-[10rem] flex-grow w-full items-center">
      <SearchBar
        placeholder="Search inventory items here"
        handleItemSearch={handleItemSearch}
      />
      <SearchTable allItems={allItems} />
    </div>
  );
};

export default SearchTile;
