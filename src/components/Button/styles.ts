import styled from 'styled-components/native';

export const Container = styled.Pressable`
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 100%;
  background: ${(props: any) => props.btnColor ? props.btnColor : "#067fcf"};
  border-radius: 6px;
  margin: 4% 4%;
`;

export const ButtonText = styled.Text`
  color: ${(props: any) => props.btnTextColor ? props.btnTextColor : "#f7f7f7"};
  font-size: 22px;
  font-weight: ${(props: any) => props.bold ? 700 : 600};
`;
