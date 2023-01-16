import styled from 'styled-components';

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  width: 280px;
  padding: 60px;
  background-color: rgb(218, 231, 230);
  box-shadow: 10px 5px 5px rgb(194, 172, 174);
`;

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: aliceblue;
`;

export const Avatar = styled.img`
  display: block;
  width: 140px;
  padding: 20px;
`;
export const NameUser = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  color: rgb(155, 155, 155);
  text-transform: uppercase;
`;
export const TagUser = styled.p`
  font-size: 16px;
  font-style: italic;
  color: grey;
`;
export const LocationUser = styled.p`
  font-size: 18px;
  margin: 0;
  color: grey;
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
`;

export const LabelSpan = styled.span`
  display: flex;
  text-align: center;
  font-size: 12px;
  color: grey;
`;

export const LabelQuantity = styled.span`
  display: flex;
  font-size: 12px;
  font-weight: bold;
  color: grey;
`;
