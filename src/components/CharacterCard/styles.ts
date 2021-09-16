import styled from "styled-components/native";

export const Row = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Card = styled.View`
  box-shadow: 2px 2px 12px rgba( 0, 0, 0, 0.4);
  margin: 15px 10px 0;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: 700;
  flex-shrink: 1;
  width:97%;
  margin:1px;
`;

export const LocationBold = styled.Text`
  font-size: 15px;
  font-weight: 700;
  margin:4px 0 5px 5px;
`;

export const Location = styled.Text`
  margin:4px 0 5px 5px;
`;

export const Favorite = styled.Pressable`
  position: absolute;
  background-color: #FFF;
  border-radius: 100px;
  padding: 4px;
  top:-10px;
  left:-5px;
`;

export const ModalView = styled.View`
  flex:1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:  rgba(255, 255, 255, 0.95);
  
`;

export const CircleImage = styled.Image`
  border-radius: 100px;
  width: 150px;
  height: 150px;
`;

export const BoldText = styled.Text`
  font-size: 15px;
  font-weight: 700;
`;
