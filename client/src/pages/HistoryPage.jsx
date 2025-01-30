import SearchTile from '../components/SearchTile';
import { UseGetAllTransactions } from '../hooks/UseGetAllTransactions';
import { TransactionTable } from '../components/TransactionTable';

export const HistoryPage = () => {
  const { transactions, errorMessage, isLoading, getAllTransactions } =
    UseGetAllTransactions();
  return (
    <main className="flex flex-col p-4">
      <div className="flex flex-col">
        <h1 className="font-primary text-5xl font-semibold">
          Inventory History
        </h1>
        <p className="text-quantGray">
          View your latest inventory transaction histories.
        </p>
        {transactions && transactions.length > 0 && (
          // <SearchTile
          //   tableHeader={'Inventory History'}
          //   items={transactions}
          //   errorMessage={errorMessage}
          //   isLoading={isLoading}
          //   refreshFunction={getAllTransactions}
          // />
          <TransactionTable transactions={transactions} />
        )}
      </div>
    </main>
  );
};
