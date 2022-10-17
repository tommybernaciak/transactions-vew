import { FC } from 'react';
import { ITransaction } from '../../types/transactions';

interface IProps {
  transactions: ITransaction[];
}

const Balance: FC<IProps> = ({ transactions }) => {
  const balance = transactions.reduce<number>((acc, current) => {
    return acc + current.amount;
  }, 0);
  return (
    <div className="bg-stone-600 text-stone-50 p-2 h-10 mb-2">
      Total Balance: {balance.toFixed(2)}
    </div>
  );
};

export default Balance;
