import React, { Fragment } from 'react';
import { Input, InputProps } from 'antd';
import FormItemUI from './formItemUI';
import { Rule } from 'antd/lib/form';
import { Typography } from 'antd';

import isEmpty from 'is-empty';

import { VALIDATE_STATUS } from '../../../common/constants/validateStatus/validateStatus';

import styles from '../../../assets/styles/Input.module.scss';
const { Text } = Typography;

interface IInputProps extends InputProps {
  name: string;
  label?: string;
  type?: string;
  rules?: Rule[] | undefined;
  feedback?: VALIDATE_STATUS;
}

function InputUI(props: IInputProps) {
  const { name, label, rules, feedback } = props;
  return (
    <Fragment>
      <FormItemUI name={name} label={label} rules={rules} feedback={feedback}>
        <Input className={styles.baseInput} type={name} {...props} />
      </FormItemUI>
    </Fragment>
  );
}

export default InputUI;
