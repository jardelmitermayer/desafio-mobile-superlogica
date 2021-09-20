import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  margin-top: 5px;
`;

export const FavoriteButton = styled.Pressable`
  padding: 10px;
  max-width: 30%;
  border-radius: 8px;
  margin: 5px 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #95C100;
`;

export const FavoriteButtonText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color:#FFF;
`;

export const Filters = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5px;
`;

export const Input = styled.TextInput`
  border: 2px solid #95C100;
  padding: 10px;
  border-radius: 10px;
  max-height: 50px;
  width: 60%;
`;