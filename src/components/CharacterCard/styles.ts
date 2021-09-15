import styled from "styled-components/native";

export const Status = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Card = styled.View`
  box-shadow: 2px 2px 12px rgba( 0, 0, 0, 0.4);
  margin: 10px 10px 0;
  
`;

export const Name = styled.Text`
  font: normal normal 700 1.4em 'Roboto';
  max-width: 90%;
  margin:1px 0 5px;
`;

export const LocationBold = styled.Text`
  font: normal normal 700 0.9em 'Roboto';
  margin:4px 0 5px 5px;
`;

export const Location = styled.Text`
  font: normal normal normal 1em 'Roboto';
  margin:4px 0 5px 5px;
`;

export const Favorite = styled.Pressable`
  margin: 7px 0 0 1px;
`;