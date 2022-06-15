import React, { Fragment } from 'react';
import { Input, InputNumber, InputProps } from 'antd';
import FormItemUI from './formItemUI';
import { Rule } from 'antd/lib/form';

import styles from '../../../assets/styles/Input.module.scss';

const { Password } = Input;

interface IInputProps extends InputProps {
  name: string;
  label?: string;
  type?: string;
  isNumber?: boolean;
  rules?: Rule[] | undefined;
  feedback?: { feedType: '' | 'success' | 'warning' | 'error' | 'validating' | undefined; fieldName: string };
}

function InputUI(props: IInputProps) {
  const { name, label, rules, feedback, isNumber } = props;

  return (
    <Fragment>
      <FormItemUI
        style={name === 'password' ? { marginBottom: 0 } : { marginBottom: 13 }}
        name={name}
        label={label}
        rules={rules}
        feedback={feedback?.feedType}
      >
        {name === 'password' ? (
          <Password className={styles.baseInput} type={name} {...props} />
        ) : name !== 'password' && isNumber ? (
          <InputNumber keyboard={false} min={1} max={4} defaultValue={3} />
        ) : (
          <Input className={styles.baseInput} type={name} {...props} />
        )}
      </FormItemUI>
    </Fragment>
  );
}

export default InputUI;
