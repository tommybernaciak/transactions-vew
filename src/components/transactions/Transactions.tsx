import { FC } from 'react';
import { useFilteredTransactions } from '../../hooks/useFilteredTransactions';
import { useTransactions } from '../../hooks/useTransactions';
import Balance from './Balance';
import Filter from './Filter';
import Table from './Table';
import TransactionForm from './TransactionForm';

const Transactions: FC = () => {
  const { transactions, addTransaction, removeTransaction } = useTransactions();
  const { filteredTransactions, clearFilter, updateFilter } = useFilteredTransactions({
    transactions: transactions.type === 'DATA_LOADED' ? transactions.data : []
  });

  if (transactions.type === 'LOADING') return <>Loading...</>;
  if (transactions.type === 'ERROR') return <>{transactions.error}</>;
  return (
    <div className="w-full md:w-2/3 md:min-w-fit bg-stone-300 p-2 lg:py-5 flex-auto">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex flex-1 flex-col md:justify-between h-auto md:mr-2">
          <Balance transactions={filteredTransactions} />
          <Filter
            data={transactions.data}
            filterBy={'beneficiary'}
            updateFilter={updateFilter}
            clearFilter={clearFilter}
          />
        </div>
        <TransactionForm addTransaction={addTransaction} />
      </div>
      <div className="bg-stone-200">
        <Table data={filteredTransactions} removeItem={removeTransaction} />
      </div>
    </div>
  );
};

export default Transactions;
