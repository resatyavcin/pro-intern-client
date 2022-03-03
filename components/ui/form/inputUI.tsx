import React from 'react';
import { Input, InputProps } from 'antd';
import { Controller, Control, FieldValues } from 'react-hook-form';
import FormItemUI from './formItemUI';

interface IInputProps extends InputProps {
  control: Control<FieldValues, object> | undefined;
  name: string;
  label?: string;
  type?: string;
  rules?: Object[];
}

function InputUI(props: IInputProps) {
  const { name, label, control, rules } = props;

  return (
    <FormItemUI name={name} label={label} rules={rules}>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input name={name} onBlur={onBlur} onChange={onChange} value={value} />
        )}
      />
    </FormItemUI>
  );
}

export default InputUI;
{
  /* <InputMask mask="+\9\0 999 999 99 99" maskPlaceholder={''}>
{() => <Input {...props} />}
</InputMask> */
}
