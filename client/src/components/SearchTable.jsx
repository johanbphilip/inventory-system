import { FaRegEdit } from 'react-icons/fa';

export const SearchTable = ({ items }) => {
  return (
    <table className="mt-10 w-full text-left font-thin">
      <thead className="">
        <tr className="bg-slate-400 text-white">
          <th className="mb-4 w-1/6 p-2 font-normal">Item</th>
          <th className="mb-4 w-1/6 p-2 font-normal">Quantity</th>
          <th className="mb-4 p-2 font-normal">Status</th>
          <th className="mb-4 w-1/6 p-2 font-normal">Purchase Price</th>
          <th className="font-normal"></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id} className="hover:bg-gray-100">
            <td className="w-1/6 p-2">{item.item_name}</td>
            <td className="w-1/6 p-2">{item.quantity}</td>
            <td className="p-2">Add an enum based on the stored key value</td>
            <td className="w-1/6 p-2">{`$ ${item.purchase_price}`}</td>
            <td className="place-items-center">
              <FaRegEdit />
            </td>
          </tr>
        ))}
        <tr></tr>
      </tbody>
    </table>
  );
};
