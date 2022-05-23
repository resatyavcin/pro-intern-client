import React from 'react';
import { Button, ButtonProps } from 'antd';
import { FormattedMessage } from 'react-intl';
import FormItemUI from '../form/formItemUI';

import styles from '../../../assets/styles/Button.module.scss';

interface IButtonProps extends ButtonProps {
  label?: string;
  type?: 'link' | 'text' | 'ghost' | 'default' | 'primary' | 'dashed' | undefined;
}

function ButtonUI(props: IButtonProps) {
  const { label, type, ...rest } = props;

  return (
    <FormItemUI>
      <Button type={type} className={styles.baseButton} {...props}>
        <FormattedMessage id={label} />
      </Button>
    </FormItemUI>
  );
}

export default ButtonUI;
