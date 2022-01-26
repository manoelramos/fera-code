import React, {useState} from 'react';
import {Wrapper, Drop, TextError} from './drop-down.component.styles';

export default function DropDown({
  items,
  placeholder,
  onChange,
  hasError,
  errorMessage,
}: DropDown.Props): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<any>(null);

  return (
    <>
      <Wrapper>
        <Drop
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          onChangeValue={onChange}
          placeholder={placeholder}
          listMode="MODAL"
          searchable
          modalTitle="Selecione uma opção"
          itemSeparator
        />
      </Wrapper>
      {hasError && <TextError>{errorMessage}</TextError>}
    </>
  );
}
