import { ChangeEvent, FC } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { ITransaction } from '../../types/transactions';
import { transactionsFilterOptions } from '../../utils/transactionsFilterOptions';

const CLEAR_FILTER_OPTION = '---';

interface IProps {
  data: ITransaction[];
  filterBy: keyof ITransaction;
  updateFilter: (value: string, filterBy: keyof ITransaction) => void;
  clearFilter: () => void;
}

const Filter: FC<IProps> = ({ data, filterBy, updateFilter, clearFilter }) => {
  const filterOptions = [CLEAR_FILTER_OPTION, ...transactionsFilterOptions(data, filterBy)];
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === CLEAR_FILTER_OPTION) {
      clearFilter();
    } else {
      updateFilter(event.target.value, filterBy);
    }
  };

  return (
    <div className="bg-stone-700 p-2 mb-2">
      <label className="text-gray-200 text-xs font-bold mb-2">Filter</label>
      <div className="relative">
        <select
          className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-1 pl-1 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          onChange={handleChange}
        >
          {filterOptions.map((option: string) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <FaArrowDown />
        </div>
      </div>
    </div>
  );
};

export default Filter;
