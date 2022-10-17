import { CSSProperties, FC, ReactElement } from 'react';
import { ITransaction } from '../../types/transactions';
import { FixedSizeList as List } from 'react-window';
import TransactionRow from './TransactionRow';

interface IProps {
  data: ITransaction[];
  removeItem: (id: number) => void;
}

const Table: FC<IProps> = ({ data, removeItem }) => {
  const row = ({ index, style }: { index: number; style: CSSProperties }): ReactElement => {
    const dataRow = data[index];
    return (
      <div style={style}>
        <TransactionRow transaction={dataRow} removeItem={removeItem} />
      </div>
    );
  };

  return (
    <List height={400} itemCount={data.length} itemSize={50} width={960}>
      {row}
    </List>
  );
};

export default Table;
