import styled from 'styled-components';

export const Item = styled.li`
  margin-bottom: 20px;
  background-color: rgb(218, 231, 230);
  display: flex;
  align-items: center;
  padding: 10px;
  color: grey;
  box-shadow: 10px 5px 5px rgb(194, 172, 174);
`;
export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background-color: ${props => (props.statusType ? 'green' : 'red')};
`;

export const FriendsName = styled.span`
  font-size: 20px;
  font-weight: bold;
  padding-left: 10px;
`;
