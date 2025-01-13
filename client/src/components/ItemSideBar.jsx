import { useState } from 'react';

import { server } from '../axios';
import { EditView } from './EditView';
import { StatusCircle } from './StatusBadge';
import { DisplayView } from './DisplayView';
import { MdOutlineInfo } from 'react-icons/md';

export const ItemSideBar = ({ item, onSave, isAddItem }) => {
  const [updatedItem, setUpdatedItem] = useState(item);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (field, value) => {
    setUpdatedItem((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const handleEditItem = async () => {
    console.log('handleSaveItem is running');
    setIsLoading(true);
    setErrorMessage('');
    try {
      console.log('inside try block');
      const { data } = await server.put(`api/item/${updatedItem.id}`, {
        itemName: updatedItem.itemName,
        quantity: updatedItem.quantity,
        purchasePrice: updatedItem.purchasePrice,
        reorderPoint: updatedItem.reorderPoint,
        storageLocation: updatedItem.storageLocation,
        category: updatedItem.category,
      });
      console.log('handleSaveItem is running with item:', data);
      onSave();
    } catch (error) {
      setErrorMessage(error.response?.data?.message || 'Failed to save item.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <aside className="flex h-full w-2/5 flex-col border-l bg-white shadow-xl">
      {isAddItem ? (
        <div className="flex items-center justify-between px-4 py-5">
          <div className="flex items-center gap-4">
            <h2 className="font-primary text-lg font-semibold">Add New Item</h2>
          </div>
          <div className="flex w-full items-center gap-6 bg-gray-100 p-4">
            <MdOutlineInfo className="size-6" />
            <h2 className="font-primary text-xl font-medium">Details</h2>
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between px-4 py-5">
            <div className="flex items-center gap-4">
              <StatusCircle status={item.status} size={'8'} />
              <h2 className="font-primary text-lg font-semibold">
                {updatedItem.itemName}
              </h2>
            </div>
          </div>
          {!isEditing ? (
            <DisplayView updatedItem={updatedItem} item={item} />
          ) : (
            <EditView item={updatedItem} handleChange={handleChange} />
          )}
          <div className="flex items-center justify-center gap-4">
            {isEditing ? (
              <button
                className="bg-quantHighlight rounded-md px-3 py-2 text-white"
                onClick={() => {
                  handleEditItem();
                  setIsEditing(false);
                }}
              >
                Save & Continue
              </button>
            ) : (
              <div className="text-quantDark flex items-center justify-center gap-2">
                <button
                  className="hover:bg-quantHighlight rounded-md bg-gray-100 px-3 py-2 hover:text-white"
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </button>
                <button className="hover:bg-quantHighlight rounded-md bg-gray-100 px-3 py-2 hover:text-white">
                  Delete
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </aside>
  );
};

export const ItemField = ({ children, fieldName, fieldValue }) => {
  return (
    <div className="flex items-center gap-2">
      {children}
      <p className="text-quantHighlight text-lg">{fieldName}</p>
      <p className="text-lg font-light">{fieldValue}</p>
    </div>
  );
};
