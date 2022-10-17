import { ITransaction } from '../types/transactions';

export const transactionsFilterOptions = (
  data: ITransaction[],
  filterBy: keyof ITransaction
): string[] => {
  const filterKeys = data.map((transaction: ITransaction) => `${transaction[filterBy]}`);
  return [...new Set(filterKeys)];
};
