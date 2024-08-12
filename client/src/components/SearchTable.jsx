import SearchBar from "./SearchBar";

const SearchTable = () => {
  return (
    <div className="flex flex-col m-[10rem] flex-grow w-full items-center">
      <SearchBar placeholder="Search iventory items here" />
    </div>
  );
};

export default SearchTable;
