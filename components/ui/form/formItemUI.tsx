import React, { Fragment } from 'react';
import { Form, FormItemProps } from 'antd';

interface IFormItemProps extends FormItemProps {
  feedback?: '' | 'success' | 'warning' | 'error' | 'validating' | undefined;
}

function FormItemUI(props: IFormItemProps) {
  const { children, feedback } = props;
  return (
    <Fragment>
      {feedback ? (
        <Form.Item hasFeedback validateStatus={feedback} {...props}>
          {children}
        </Form.Item>
      ) : (
        <Form.Item {...props}>{children}</Form.Item>
      )}
    </Fragment>
  );
}

export default FormItemUI;
