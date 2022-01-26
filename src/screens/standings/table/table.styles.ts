import styled from 'styled-components/native';
import {Table, Row} from 'react-native-table-component';

export const Scroll = styled.ScrollView``;

export const Wrapper = styled.View`
  flex: 1;
`;

export const TTable = styled(Table).attrs({
  borderStyle: {
    borderWidth: 2,
    borderColor: '#c8e1ff',
  },
})``;

export const TRow = styled(Row).attrs({
  textStyle: {
    margin: 6,
  },
})`
  height: 60px;
`;
