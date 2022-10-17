import { render } from '@testing-library/react';
import { ITransaction } from '../../types/transactions';
import Balance from './Balance';

describe(Balance.name, () => {
  it('should render Balance component', () => {
    const data: ITransaction[] = [
      {
        id: 1,
        amount: 123,
        beneficiary: 'test1',
        account: 'account 1',
        address: 'address 1',
        date: 'Jun 6, 2021',
        description: 'desc 1'
      },
      {
        id: 2,
        amount: 345,
        beneficiary: 'test2',
        account: 'account 2',
        address: 'address 2',
        date: 'Jun 6, 2022',
        description: 'desc 2'
      },
      {
        id: 3,
        amount: -120,
        beneficiary: 'test3',
        account: 'account 3',
        address: 'address 3',
        date: 'Jun 6, 2022',
        description: 'desc 3'
      }
    ];
    const rendered = render(<Balance transactions={data} />);
    const component = rendered.getByTestId('total-balance');

    expect(component).toHaveTextContent('Total Balance: 348.00');
  });

  it('should render Balance component with 0 value', () => {
    const data: ITransaction[] = [];
    const rendered = render(<Balance transactions={data} />);
    const component = rendered.getByTestId('total-balance');

    expect(component).toHaveTextContent('Total Balance: 0.00');
  });
});
