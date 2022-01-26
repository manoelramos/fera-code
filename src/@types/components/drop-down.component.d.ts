declare namespace DropDown {
  type Props = {
    items: Array<{
      label: string;
      value: string;
    }>;
    placeholder: string;
    value?: string;
    onChange: (value: any) => void;
    icon?: any;
    hasError?: boolean;
    errorMessage?: string;
  };
}
