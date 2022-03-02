import React from 'react';
import { Form, Input, InputProps } from 'antd';
import InputMask from 'react-input-mask';

interface IInputProps extends InputProps {
  name: string;
  label?: string;
  type?: string;
}

function InputUI(props: IInputProps) {
  const { name, label, type } = props;

  return (
    <Form.Item name={name} label={label}>
      {type === 'password' ? (
        <Input.Password {...props} />
      ) : (
        <InputMask mask="+\9\0 999 999 99 99" maskChar=" ">
          {() => <Input {...props} />}
        </InputMask>
      )}
    </Form.Item>
  );
}

export default InputUI;
