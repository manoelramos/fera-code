import styled from 'styled-components/native';
import {DropDown, PrimaryButton} from '~/components';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
`;

export const InputWrapper = styled.View`
  margin-bottom: 16px;
`;

export const DropLeagues = styled(DropDown)``;

export const DropSeasons = styled(DropDown)``;

export const Button = styled(PrimaryButton)``;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
})`
  color: black;
  align-self: center;
`;
