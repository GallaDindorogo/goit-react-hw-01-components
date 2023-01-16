import styled from 'styled-components';

export const StatSection = styled.section`
  margin-left: 20px;
  margin-bottom: 30px;
  background-color: rgb(218, 231, 230);
  width: fit-content;
  text-align: center;
  padding: 70px;
  box-shadow: 10px 5px 5px rgb(194, 172, 174);
`;
export const Title = styled.h2`
  margin: 0;
  color: rgb(155, 155, 155);
  padding: 25px 30px;
  background-color: aliceblue;
  text-transform: uppercase;
`;
export const StatList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;
  margin-top: 0;
  padding: 10px;
  font-size: 14px;
  border: 1px solid gray;
  background-color: beige;
  color: rgb(146, 146, 152);
`;
