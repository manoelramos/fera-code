import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Wrapper = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 4,
})`
  background-color: white;
  margin: 8px 0px;
  flex-direction: row;
  align-items: center;
  padding: 16px;
`;

export const TeamLogo = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.contain,
})`
  width: 90px;
  height: 90px;
`;

export const DetailsWrapper = styled.View`
  margin-left: 8px;
`;

export const TeamName = styled.Text`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
`;

export const TeamDetails = styled.Text`
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
`;
