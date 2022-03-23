import React, { Fragment } from 'react';
import { Input, InputProps } from 'antd';
import FormItemUI from './formItemUI';
import { Rule } from 'antd/lib/form';

import styles from '../../../assets/styles/Input.module.scss';

const { Password, Search, Group, TextArea } = Input;

interface IInputProps extends InputProps {
  name: string;
  label?: string;
  type?: string;
  rules?: Rule[] | undefined;
  feedback?: { feedType: '' | 'success' | 'warning' | 'error' | 'validating' | undefined; fieldName: string };
}

function InputUI(props: IInputProps) {
  const { name, label, rules, feedback } = props;

  const inputType = (fieldName: string) => {
    switch (fieldName) {
      case 'password':
        return <Password className={styles.baseInput} type={name} {...props} />;
      default:
        return <Input className={styles.baseInput} type={name} {...props} />;
    }
  };
  return (
    <Fragment>
      <FormItemUI name={name} label={label} rules={rules} feedback={feedback?.feedType}>
        {inputType(name)}
      </FormItemUI>
    </Fragment>
  );
}

export default InputUI;
