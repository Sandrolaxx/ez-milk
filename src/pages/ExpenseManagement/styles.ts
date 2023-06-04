import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding: 0 4%;
  background: #fcfcfc;
`;

export const ContainerBtn = styled.SafeAreaView`
  padding: 0 4%;
  background: #fcfcfc;
`;

export const SelectViewContainer = styled.View`
  height: 76px;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  background: #fcfcfc;
`;

export const SelectedView = styled.Pressable`
  height: 76px;
  width: 50%;
  background: ${(props: any) => (props.selected ? '#D9D9D9' : '#fcfcfc')};
`;

export const SelectedViewText = styled.Text`
  padding-top: 28px;
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  color: ${(props: any) => (props.selected ? '#1294F2' : '#575767')};
`;

export const CardBtnBlock = styled.View`
  flex-direction: row;
`;

export const ExpenseCardBtn = styled.Pressable`
  height: 142px;
  width: 46%;
  border: 0.5px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: #dfdfe2;
  border: #b9b9c5;
  margin: 3%;
`;

export const ExpenseText = styled.Text`
  font-weight: 700;
  font-size: 18px;
  margin-top: 8px;
  color: #292b35;
`;

export const ExpenseImage = styled.Image`
  margin-top: 8px;
  height: 56px;
  width: 56px;
`;

export const DropDownIcon = styled.Image`
  height: 32px;
  width: 32px;
`;

export const Separator = styled.View`
  width: 100%;
  height: 0.5px;
  background: #b9b9c5;
`;

export const Subtitle = styled.Text`
  padding-top: 32px;
  font-weight: 700;
  font-size: 18px;
  padding-bottom: 20px;
`;

export const Movimentations = styled.ScrollView`
  flex: 1;
  margin-top: 18px;
  width: 100%;
`;

export const MovimentBlock = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: ${(props: any) => (props.lastMov ? '34px' : '0px')};
`;

export const MovimentDiscription = styled.Text`
  font-size: 14px;
  height: 32px;
  align-items: center;
  margin-top: 10px;
  color: #292b35;
`;

export const MovimentValue = styled.Text`
  font-weight: 700;
  font-size: 18px;
  height: 32px;
  margin-top: 8px;
  color: ${(props: any) => (props.cashIn ? '#00A441' : '#B80505')};
`;
