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
  padding: 16px;
`;

export const StadiumImage = styled(FastImage).attrs({
  resizeMode: FastImage.resizeMode.stretch,
})`
  width: 100%;
  height: 150px;
`;

export const DetailsWrapper = styled.View`
  margin-top: 16px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
`;

export const RowItemWrapper = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 12px;
  font-weight: 800;
  line-height: 20px;
`;

export const Info = styled.Text`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
