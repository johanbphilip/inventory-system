import React from "react";

const SearchTable = ({ items }) => {
  const rowClassName = "px-4 py-2";
  if (items.length === 0) {
    return (
      <div className="m-16 text-red-600 font-bold text-lg">
        This item does not exist, try again
      </div>
    );
  } else {
    return (
      <table className="m-16 border table-auto w-full">
        <thead className="border p-4">
          <tr className="bg-neutral-900 text-gray-50 text-left">
            <th className={rowClassName}>Id</th>
            <th className={rowClassName}>Item</th>
            <th className={rowClassName}>Purchase Price</th>
            <th className={rowClassName}>Quantity</th>
            <th className={rowClassName}>Added</th>
            <th className={rowClassName}>Updated</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={item._id} className="align-middle">
              <td className={rowClassName}>{index + 1}</td>
              <td className={rowClassName}>{item.name}</td>
              <td className={rowClassName}>{item.purchasePrice}</td>
              <td className={rowClassName}>{item.quantity}</td>
              <td className={rowClassName}>{item.createdAt}</td>
              <td className={rowClassName}>{item.updatedAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

export default SearchTable;
