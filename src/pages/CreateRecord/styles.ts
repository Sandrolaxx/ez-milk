import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding: 0 4%;
  background: #fcfcfc;
`;

export const RegisterBtnContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 6px;
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
`;

export const CalendarView = styled.View`
  position: absolute;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #c1c1c18f;
`;
