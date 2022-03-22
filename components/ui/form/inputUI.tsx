import React, { Fragment } from 'react';
import { Input, InputProps } from 'antd';
import FormItemUI from './formItemUI';
import { Rule } from 'antd/lib/form';

import styles from '../../../assets/styles/Input.module.scss';

interface IInputProps extends InputProps {
  name: string;
  label?: string;
  type?: string;
  rules?: Rule[] | undefined;
  feedback?: { feedType: '' | 'success' | 'warning' | 'error' | 'validating' | undefined; fieldName: string };
}

function InputUI(props: IInputProps) {
  const { name, label, rules, feedback } = props;

  return (
    <Fragment>
      <FormItemUI name={name} label={label} rules={rules} feedback={feedback?.feedType}>
        <Input type={name} {...props} />
      </FormItemUI>
    </Fragment>
  );
}

export default InputUI;
