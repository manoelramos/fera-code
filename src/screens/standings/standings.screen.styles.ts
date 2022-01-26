import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  padding: 16px;
`;

export const LoadingWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
})``;
