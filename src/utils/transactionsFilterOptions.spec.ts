import { ITransaction } from '../types/transactions';
import { transactionsFilterOptions } from './transactionsFilterOptions';

describe('transactionsFilterOptions', () => {
  it('returns array with filter options - beneficiary', function () {
    const data: ITransaction[] = [
      {
        id: 1,
        amount: 1232,
        beneficiary: 'test1',
        account: 'account 1',
        address: 'address 1',
        date: 'Jun 6, 2021',
        description: 'desc 1'
      },
      {
        id: 2,
        amount: 2232,
        beneficiary: 'test2',
        account: 'account 2',
        address: 'address 2',
        date: 'Jun 6, 2022',
        description: 'desc 2'
      }
    ];

    expect(transactionsFilterOptions(data, 'beneficiary')).toEqual(['test1', 'test2']);
  });

  it('returns array with filter options - account', function () {
    const data: ITransaction[] = [
      {
        id: 1,
        amount: 1232,
        beneficiary: 'test1',
        account: 'account 1',
        address: 'address 1',
        date: 'Jun 6, 2021',
        description: 'desc 1'
      },
      {
        id: 2,
        amount: 2232,
        beneficiary: 'test2',
        account: 'account 2',
        address: 'address 2',
        date: 'Jun 6, 2022',
        description: 'desc 2'
      }
    ];

    expect(transactionsFilterOptions(data, 'account')).toEqual(['account 1', 'account 2']);
  });

  it('returns empty array when data array is empty', function () {
    const data: ITransaction[] = [];

    expect(transactionsFilterOptions(data, 'account')).toEqual([]);
  });
});
