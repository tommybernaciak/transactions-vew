import { FC } from 'react';
import { useFormik } from 'formik';
import { ITransaction } from '../../types/transactions';
import TextInput from '../TextInput';
import addTransactionValidator from '../../validators/addTransactionValidator';

interface IProps {
  addTransaction: (values: Omit<ITransaction, 'id' | 'beneficiary' | 'date'>) => void;
}

const TransactionForm: FC<IProps> = ({ addTransaction }) => {
  const formik = useFormik({
    initialValues: {
      amount: 0,
      account: '',
      address: '',
      description: ''
    },
    onSubmit: (values: Omit<ITransaction, 'id' | 'beneficiary' | 'date'>) => {
      addTransaction(values);
    },
    validationSchema: addTransactionValidator()
  });
  return (
    <div className="bg-stone-100 flex-1 p-2 mb-2">
      <form onSubmit={formik.handleSubmit} className="flex flex-col">
        <label className="text-gray-800 text-xs mb-1">Amount</label>
        <TextInput
          id={'amount'}
          value={formik.values.amount}
          error={formik.errors.amount}
          touched={formik.touched.amount}
          type="number"
          onChange={formik.handleChange}
        />
        <label className="text-gray-800 text-xs mb-1">Account number</label>
        <TextInput
          id={'account'}
          value={formik.values.account}
          error={formik.errors.account}
          touched={formik.touched.account}
          onChange={formik.handleChange}
        />
        <label className="text-gray-800 text-xs mb-1">Address</label>
        <TextInput
          id={'address'}
          value={formik.values.address}
          error={formik.errors.address}
          touched={formik.touched.address}
          onChange={formik.handleChange}
        />
        <label className="text-gray-800 text-xs mb-1">Description</label>
        <TextInput
          id={'description'}
          value={formik.values.description}
          error={formik.errors.description}
          touched={formik.touched.description}
          onChange={formik.handleChange}
        />
        <button
          className="text-white bg-stone-800 hover:bg-stone-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-2 dark:bg-stone-800 dark:hover:bg-stone-700 dark:focus:ring-gray-700 dark:border-stone-700"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
