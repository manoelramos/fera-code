declare namespace Button {
  type Props = {
    text: string;
    onPress: () => void;
    disabled?: boolean;
    isLoading?: boolean;
  };
}
