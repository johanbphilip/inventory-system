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
