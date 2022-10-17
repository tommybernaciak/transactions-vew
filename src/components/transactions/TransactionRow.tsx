import { FC } from 'react';
import { ITransaction } from '../../types/transactions';

interface IProps {
  transaction: ITransaction;
  removeItem: (id: number) => void;
}

const TransactionRow: FC<IProps> = ({ transaction, removeItem }) => {
  const date = new Date(transaction.date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  const handleRemove = () => {
    removeItem(transaction.id);
  };

  return (
    <div className="flex text-xs">
      <div className="w-4 mr-1">{transaction.id}</div>
      <div className="w-24 mr-1">{date}</div>
      <div className="w-32 mr-1">{transaction.beneficiary}</div>
      <div className="w-16 mr-1">{transaction.amount}</div>
      <div className="w-48 mr-1">{transaction.account}</div>
      <div className="w-60 mr-1 hidden md:block">{transaction.description}</div>
      <div className="w-48 mr-1 hidden md:block">{transaction.address}</div>
      <button
        onClick={handleRemove}
        className="text-white bg-stone-800 hover:bg-stone-900 focus:outline-none focus:ring-4 focus:ring-gray-300 rounded-lg text-xs px-1 py-1 dark:bg-stone-800 dark:hover:bg-stone-700 dark:focus:ring-gray-700 dark:border-stone-700 h-6"
      >
        Remove
      </button>
    </div>
  );
};

export default TransactionRow;
