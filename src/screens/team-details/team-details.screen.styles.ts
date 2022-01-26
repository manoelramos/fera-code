import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const LoadingWrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'large',
})``;
