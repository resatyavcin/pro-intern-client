//import react
import React, { ReactNode } from 'react';

//import ant
import { Form, FormProps } from 'antd';

interface IFormProps extends FormProps {
  children: ReactNode;
  handleSubmit: () => void;
}

function formUI(props: IFormProps) {
  const { children, handleSubmit } = props;

  return (
    <Form onFinish={handleSubmit} layout="vertical">
      {children}
    </Form>
  );
}

export default formUI;
