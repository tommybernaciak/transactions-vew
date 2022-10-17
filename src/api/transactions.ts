import { ITransaction } from '../types/transactions';
import { getRequest } from './gateway';

export const getTransactionsRequest = async () => {
  return await getRequest<ITransaction[]>({
    url: '/transactions'
  });
};
