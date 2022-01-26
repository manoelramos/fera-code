import styled from 'styled-components/native';
import DropDownPicker from 'react-native-dropdown-picker';

export const Wrapper = styled.View.attrs({
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
})`
  background-color: white;
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-radius: 40px;
  padding-horizontal: 16px;
`;

export const Drop = styled(DropDownPicker).attrs({
  containerStyle: {
    width: '90%',
  },
})`
  border-color: transparent;
`;

export const TextError = styled.Text`
  font-family: 'Poppins';
  font-size: 12px;
  color: red;
  margin-top: 4px;
  margin-left: 12px;
`;
