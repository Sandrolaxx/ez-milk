import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding: 0 4%;
  background: #fcfcfc;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 700;
  color: #292b35;
  align-self: flex-start;
`;

export const SubTitle = styled.Text`
  font-size: 18px;
  color: #575767;
  font-weight: 700;
  align-self: flex-start;
  margin-bottom: 16px;
`;

export const HeardQuantityText = styled.Text`
  font-size: 16px;
  color: #575767;
  align-self: flex-start;
  margin-top: 4px;
  margin-bottom: 28px;
`;

export const HeaderText = styled.Text`
  font-size: 16px;
  color: #575767;
  align-self: flex-start;
  margin-bottom: 8px;
`;

export const SumInput = styled.View`
  flex-direction: row;
  height: 56px;
  width: 100%;
  border-radius: 6px;
  margin-bottom: 14px;
`;

export const PlusBtn = styled.Pressable`
  height: 56px;
  width: 20%;
  justify-content: center;
  align-items: center;
  background: #dff0ff;
`;

export const MinusBtn = styled.Pressable`
  height: 56px;
  width: 20%;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  background: #ffe5e5;
`;

export const BtnImageIcon = styled.Image`
  height: 42px;
  width: 42px;
`;

export const InputText = styled.TextInput`
  height: 56px;
  width: 60%;
  background: #e8eef0;
  font-size: 16px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  border-color: #808081;
  color: #2b2b2b;
  padding-left: 12px;
`;

export const InputsContainer = styled.View`
  height: 76%;
`;
