import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 8%;
  align-items: center;
  width: 100%;
`;

export const InputText = styled.TextInput`
  height: 56px;
  width: 90%;
  background-color: #e8eef0;
  font-size: 16px;
  border-radius: 6px;
  padding: 8px 12px;
  border: 1px;
  border-color: ${(props: any) => props.focused ? "#9fb9ff" : "#ced0d1"};
  color: #808081;
`;

export const HeaderTitle = styled.Text`
  width: 100%;
  margin: 8px 0px;
  font-size: 22px;
  color: #1477d4;
`;
