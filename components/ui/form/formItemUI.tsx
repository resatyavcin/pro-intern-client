import React, { Fragment } from 'react';
import { Form, FormItemProps } from 'antd';

import { VALIDATE_STATUS } from '../../../common/constants/validateStatus/validateStatus';
interface IFormItemProps extends FormItemProps {
  feedback?: VALIDATE_STATUS;
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
