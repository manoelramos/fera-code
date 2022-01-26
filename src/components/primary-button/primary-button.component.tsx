import React from 'react';
import {
  Wrapper,
  Text,
  TouchableWrapper,
} from './primary-button.component.styles';

type Props = Button.Props;

export default function PrimaryButton({
  text,
  onPress,
  disabled,
}: Props): JSX.Element {
  return (
    <Wrapper>
      <TouchableWrapper onPress={onPress} disabled={disabled}>
        <Text>{text}</Text>
      </TouchableWrapper>
    </Wrapper>
  );
}
