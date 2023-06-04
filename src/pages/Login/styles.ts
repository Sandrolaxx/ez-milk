import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  padding: 0 4%;
  background: #fcfcfc;
`;

export const ContainerLogin = styled.View`
  height: 70%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #fcfcfc;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 32px;
  color: #292b35;
`;

export const SubTitle = styled.Text`
  font-weight: 600;
  font-size: 18px;
  color: #575767;
`;

export const LogoImg = styled.Image`
  width: 96px;
  height: 96px;
`;

export const Separator = styled.View`
    height: 32px;
`