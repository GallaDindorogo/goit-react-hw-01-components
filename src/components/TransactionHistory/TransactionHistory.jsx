import PropTypes from 'prop-types';
import { TransactionHistoryTable } from './transactionHistory.styled';
import { Thead } from './transactionHistory.styled';
import { TrColumn } from './transactionHistory.styled';
import { TdString } from './transactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <Thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TrColumn key={id}>
              <TdString>{type}</TdString>
              <TdString>{amount}</TdString>
              <TdString>{currency}</TdString>
            </TrColumn>
          );
        })}
      </tbody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
