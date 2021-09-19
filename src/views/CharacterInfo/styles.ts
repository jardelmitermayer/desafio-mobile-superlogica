import styled from "styled-components/native";

export const Row = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Location = styled.Text`
  margin:4px 0 5px 5px;
`;

export const CharacterInfoView = styled.View`
  flex:1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:  rgba(255, 255, 255, 0.95);
  
`;

export const CircleImage = styled.Image`
  border-radius: 100px;
  width: 200px;
  height: 200px;
  margin-bottom: 55px;
`;

export const BoldText = styled.Text`
  font-size: 15px;
  font-weight: 700;
`;
