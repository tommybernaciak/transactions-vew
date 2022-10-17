import { useEffect, useState } from 'react';
import { getTransactionsRequest } from '../api/transactions';
import { GetTransactionsState, ITransaction } from '../types/transactions';

export const useTransactions = () => {
  const [transactions, setTransactions] = useState<GetTransactionsState>({ type: 'LOADING' });

  const addTransaction = (values: Omit<ITransaction, 'id' | 'beneficiary' | 'date'>) => {
    if (transactions.type !== 'DATA_LOADED') return;
    const newTransaction: ITransaction = {
      id: transactions.data[transactions.data.length - 1].id + 1,
      beneficiary: 'Test user',
      date: new Date().toString(),
      ...values
    };

    const updatedTransactions = [...transactions.data, newTransaction];
    setTransactions(prev => ({ ...prev, data: updatedTransactions }));
  };

  const removeTransaction = (id: number) => {
    if (transactions.type !== 'DATA_LOADED') return;
    const updatedTransactions = transactions.data.filter((t: ITransaction) => t.id !== id);
    setTransactions(prev => ({ ...prev, data: updatedTransactions }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getTransactionsRequest();
        setTransactions({ type: 'DATA_LOADED', data: response.data });
      } catch (err) {
        setTransactions({
          type: 'ERROR',
          error: typeof err === 'string' ? err : 'Server Error'
        });
      }
    };

    fetchData();
  }, []);

  return { transactions, addTransaction, removeTransaction };
};
