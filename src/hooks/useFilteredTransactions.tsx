import { useEffect, useState } from 'react';
import { ITransaction, ITransactionFilter } from '../types/transactions';

interface IProps {
  transactions: ITransaction[];
}

export const useFilteredTransactions = ({ transactions }: IProps) => {
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);
  const [filter, setFilter] = useState<ITransactionFilter>();
  const clearFilter = () => {
    setFilter(undefined);
  };

  const updateFilter = (value: string, filterBy: ITransactionFilter['filterBy']) => {
    setFilter({ value, filterBy });
  };

  useEffect(() => {
    if (filter != null) {
      setFilteredTransactions(
        transactions.filter(
          (transaction: ITransaction) => transaction[filter.filterBy] === filter.value
        )
      );
    } else {
      setFilteredTransactions(transactions);
    }
  }, [transactions, filter]);

  return { transactions, filteredTransactions, clearFilter, updateFilter };
};
