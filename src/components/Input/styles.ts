import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 50px;
  padding: 0 12px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY5}
`;

export const InputContainer = styled.TextInput`
  flex: 1;
  height: 45px;
  border: 0;
  border-radius: 8px;
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.POPPINSLIGHT};

`;
