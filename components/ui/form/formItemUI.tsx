import React from 'react';
import { Form, FormItemProps } from 'antd';

interface IFormItemProps extends FormItemProps {
  errorLabel?: boolean;
}

function FormItemUI(props: IFormItemProps) {
  const { children, errorLabel } = props;
  return (
    <Form.Item style={errorLabel ? { marginBottom: '10px' } : { marginBottom: '18px' }} {...props}>
      {children}
    </Form.Item>
  );
}

export default FormItemUI;
