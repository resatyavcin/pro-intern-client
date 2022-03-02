import React from 'react';
import { Form, FormItemProps } from 'antd';

interface IFormItemProps extends FormItemProps {}

function FormItemUI(props: IFormItemProps) {
  const { children } = props;
  return <Form.Item {...props}>{children}</Form.Item>;
}

export default FormItemUI;
