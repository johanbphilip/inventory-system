import { IoCheckboxOutline, IoCheckbox } from 'react-icons/io5';
import { StatusBadge } from './StatusBadge';

export const TransactionTable = ({ transactions }) => {
  const allSelected = transactions.length > 0;
  const dates = [
    ...transactions.map((transaction) =>
      new Date(transaction.createdAt).toLocaleString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      }),
    ),
  ];
  //!remove CLG later
  console.log('New Data CLG:', transactions[0].newData[0]);

  return (
    <table className="w-full text-left font-thin mt-4">
      <thead className="rounded-md">
        <tr className="bg-quantDark text-white">
          <th
            className="w-fit place-items-center rounded-l-md px-2"
            // onClick={allSelected ? clearSelection : selectAllItems}
          >
            {' '}
            {allSelected ? (
              <IoCheckbox className="size-5 fill-white hover:cursor-pointer" />
            ) : (
              <IoCheckboxOutline className="size-5 hover:cursor-pointer" />
            )}
          </th>
          <th className="mb-4 p-2 font-normal">Action</th>
          <th className="mb-4 p-2 font-normal">Item</th>
          <th className="mb-4 p-2 font-normal">Previous Item</th>
          <th className="mb-4 p-2 font-normal">Current Item</th>
          <th className="mb-4 rounded-r-md p-2 font-normal">
            Transaction Time
          </th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <tr
            key={transaction.id}
            className={`border-b ${
              transactions.includes(transaction.id) ? 'bg-gray-200' : ''
            }`}
          >
            <td className="place-items-center">
              {transactions.includes(transaction.id) ? (
                <IoCheckbox
                  className="fill-quantHighlight size-5 hover:cursor-pointer"
                  // onClick={() => {
                  //   toggleSelectedItem(item.id);
                  // }}
                />
              ) : (
                <IoCheckboxOutline
                  className="size-5 hover:cursor-pointer"
                  // onClick={() => {
                  //   toggleSelectedItem(item.id);
                  // }}
                />
              )}
            </td>
            <td
              className="cursor-pointer p-2 underline underline-offset-2"
              // onClick={() => onEditClick(item)}
            >
              {transaction.actionType}
            </td>
            <td className="p-2">{transaction.itemName}</td>
            <td className="p-2">
              {transaction.oldData
                ? transaction.oldData[0].itemName
                : 'No Previous History'}
            </td>
            <td className="p-2">{transaction.newData[0].itemName}</td>
            <td className="p-2">{dates[index]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
