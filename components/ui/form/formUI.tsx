//import react
import React, { ReactNode } from 'react';

//import ant
import { Form, FormProps } from 'antd';

interface IFormProps extends FormProps {
  children: ReactNode;
  isNotBlank?: Boolean;
}

function formUI(props: IFormProps) {
  const { children, isNotBlank } = props;

  return (
    <Form layout="vertical" style={isNotBlank ? { height: 32 } : { padding: 5 }} {...props}>
      {children}
    </Form>
  );
}

export default formUI;
