import { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from 'react-icons/md';
import { IoCheckboxOutline, IoCheckbox } from 'react-icons/io5';
import { StatusBadge } from './StatusBadge';

export const SearchTable = ({
  items,
  toggleSelectedItem,
  selectAllItems,
  clearSelection,
  selectedItems,
  onEditClick,
}) => {
  const allSelected = items.length > 0 && selectedItems.length === items.length;

  // const renderStatusTag = (status) => {
  //   {
  //     switch (status) {
  //       case 'HIGH':
  //         return (
  //           <p className="flex w-fit items-center gap-2 rounded-md border border-green-400 px-3 py-1 text-sm font-semibold text-green-600">
  //             <div className="size-3 rounded-full bg-green-400 p-2"></div>
  //             {status}
  //           </p>
  //         );

  //       case 'SUFFICIENT':
  //         return (
  //           <p className="flex w-fit items-center gap-2 rounded-md border border-amber-400 px-3 py-1 text-sm font-semibold text-amber-400">
  //             <div className="size-3 rounded-full bg-amber-400 p-2"></div>
  //             {status}
  //           </p>
  //         );
  //       case 'LOW':
  //         return (
  //           <p className="flex w-fit items-center gap-2 rounded-md border border-red-400 px-3 py-1 text-sm font-semibold text-red-600">
  //             <div className="size-3 rounded-full bg-red-400 p-2"></div>

  //             {status}
  //           </p>
  //         );
  //       default:
  //         return (
  //           <p className="w-fit rounded-md border border-orange-400 bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-600">
  //             {status || 'UNKOWN'}
  //           </p>
  //         );
  //     }
  //   }
  // };

  return (
    <table className="w-full text-left font-thin">
      <thead className="rounded-md">
        <tr className="bg-quantDark text-white">
          <th
            className="w-fit place-items-center rounded-l-md"
            onClick={allSelected ? clearSelection : selectAllItems}
          >
            {' '}
            {allSelected ? (
              <IoCheckbox className="size-5 fill-white hover:cursor-pointer" />
            ) : (
              <IoCheckboxOutline className="size-5 hover:cursor-pointer" />
            )}
          </th>
          <th className="mb-4 p-2 font-normal">Item</th>
          <th className="mb-4 p-2 font-normal">Quantity</th>
          <th className="mb-4 p-2 font-normal">Status</th>
          <th className="mb-4 rounded-r-md p-2 font-normal">Purchase Price</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr
            key={item.id}
            className={`border-b ${
              selectedItems.includes(item.id) ? 'bg-gray-200' : ''
            }`}
          >
            <td className="place-items-center">
              {selectedItems.includes(item.id) ? (
                <IoCheckbox
                  className="fill-quantHighlight size-5 hover:cursor-pointer"
                  onClick={() => {
                    toggleSelectedItem(item.id);
                  }}
                />
              ) : (
                <IoCheckboxOutline
                  className="size-5 hover:cursor-pointer"
                  onClick={() => {
                    toggleSelectedItem(item.id);
                  }}
                />
              )}
            </td>
            <td
              className="cursor-pointer p-2 underline underline-offset-2"
              onClick={() => onEditClick(item)}
            >
              {item.itemName}
            </td>
            <td className="p-2">{item.quantity}</td>
            <td className="p-2">
              <StatusBadge
                status={item.status}
                iconIsShown={true}
                isTextShown={true}
              />
            </td>
            <td className="p-2">{`$ ${item.purchasePrice}`}</td>
          </tr>
        ))}
        <tr></tr>
      </tbody>
    </table>
  );
};
