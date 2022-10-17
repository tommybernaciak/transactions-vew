export type GetTransactionsState =
  | { type: 'LOADING' }
  | { type: 'ERROR'; error: string }
  | { type: 'DATA_LOADED'; data: ITransaction[] };

export interface ITransaction {
  id: number;
  amount: number;
  beneficiary: string;
  account: string;
  address: string;
  date: string;
  description: string;
}

export interface ITransactionFilter {
  value: string;
  filterBy: keyof ITransaction;
}
