import { useState } from 'react';
import { SearchBar } from './SearchBar';
import { MdFilterList } from 'react-icons/md';
import { FiDelete } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa6';
import { SearchTable } from './SearchTable';
import { AddItem } from './AddItem';
import { UseGetAllItems } from '../hooks/UseGetAllItems';
import { server } from '../axios';
import { ItemSideBar } from './ItemSideBar';
import { NavLink, redirect } from 'react-router';

const SearchTile = ({
  items,
  errorMessage,
  isLoading,
  refreshFunction,
  tableHeader,
}) => {
  // const { items, errorMessage, isLoading, getAllItems } = UseGetAllItems();
  const [displayItems, setDisplayItems] = useState(items);
  const [isAddItemOpen, setIsAddItemOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  console.log(displayItems);
  const [editingItem, setEditingItem] = useState(null);
  //select functionality
  const toggleSelectedItem = (itemId) => {
    // if selectedItems includes the itemId passed in, then filter selectedItems to not include that item
    // else, just add on the itemId to the selectedItems array
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId],
    );
  };

  const selectAllItems = () => {
    // setSelectedItems to be the id of all the items in items
    setSelectedItems(displayItems.map((item) => item.id));
  };

  const clearSelection = () => {
    setSelectedItems([]);
  };
  const handleEditClick = (item) => {
    setEditingItem(item);
  };
  // refresh page on save
  const onSaveAddItem = async () => {
    await refreshFunction();
  };
  const onSaveEditItem = async () => {
    // setEditingItem(null);
    await refreshFunction();
  };
  const handleDeleteItem = async () => {
    const deletePromises = selectedItems.map(async (item) => {
      console.log(item);
      try {
        const { data } = await server.delete(`api/item/${item}`);
        console.log('running successfully in handleDeleteItems', data);
      } catch (error) {
        console.log(error);
      }
    });
    const results = await Promise.all(deletePromises);

    await refreshFunction();
  };
  return (
    <div className="flex w-full flex-row">
      <div className="flex w-full flex-col items-center gap-5 px-4 py-5">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold"> {tableHeader}</h2>
            <h2 className="text-quantGray text-2xl font-medium">
              {displayItems.length}
            </h2>
          </div>
          <div className="flex gap-4">
            <SearchBar placeholder="Search here" />
            <button className="flex items-center justify-center gap-2 rounded-md border px-3 font-light">
              <MdFilterList className="size-4" />
              Filters
            </button>
            {selectedItems.length > 0 && (
              <button
                className="bg-quantDark hover:bg-quantHighlight flex items-center justify-center gap-2 rounded-md px-3 font-light text-white"
                onClick={handleDeleteItem}
              >
                <FiDelete className="size-4" />
                {selectedItems.length === 1 ? 'Delete Item' : 'Delete Items'}
              </button>
            )}
            <button
              className="bg-quantDark hover:bg-quantHighlight flex items-center justify-center gap-2 rounded-md px-3 font-light text-white"
              onClick={() => redirect('/add-item')}
            >
              <FaPlus className="size-4" />
              Add Item
            </button>
            <NavLink to={'/add-item'}>Add Item</NavLink>
          </div>
        </div>
        {isLoading && <p>Finding data...</p>}
        {displayItems && displayItems.length > 0 && (
          <SearchTable
            items={displayItems}
            toggleSelectedItem={toggleSelectedItem}
            selectAllItems={selectAllItems}
            clearSelection={clearSelection}
            selectedItems={selectedItems}
            onEditClick={handleEditClick}
          />
        )}
        {/* {isAddItemOpen && redirect('/add-item')} */}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>
      {editingItem && (
        <ItemSideBar
          key={editingItem.id ?? 1}
          item={editingItem}
          onSave={onSaveEditItem}
          isAddItem={isAddItemOpen}
        />
      )}
    </div>
  );
};

export default SearchTile;
