//import react
import React, { ReactNode } from 'react';

//import ant
import { Form, FormProps } from 'antd';

interface IFormProps extends FormProps {
  children: ReactNode;
}

function formUI(props: IFormProps) {
  const { children } = props;

  return (
    <Form layout="vertical" style={{ padding: 5 }} {...props}>
      {children}
    </Form>
  );
}

export default formUI;
