import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  flex-direction: column;
  table-layout: auto;
  padding: 30px;
  margin-left: 20px;
  width: 70%;
  table-layout: fixed;
  border-collapse: collapse;
  border: 3px solid rgb(172, 160, 164);
  background-color: rgb(199, 186, 192);
  box-shadow: 10px 5px 5px rgb(194, 172, 174);
`;
export const Thead = styled.thead`
  padding: 8px;
  text-align: center;
  border: 1px solid rgb(169, 169, 169);
  text-transform: uppercase;
  background-color: rgb(131, 222, 236);
  padding: 15px;
  color: rgb(104, 103, 103);
`;
export const TrColumn = styled.tr`
  :nth-of-type(even) {
    background-color: rgb(217, 214, 219);
  }
`;
export const TdString = styled.td`
  padding: 8px;
  text-align: center;
  border: 1px solid rgb(169, 169, 169);
`;
