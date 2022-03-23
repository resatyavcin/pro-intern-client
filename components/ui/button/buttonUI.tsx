import React from 'react';
import { Button, ButtonProps } from 'antd';
import { FormattedMessage } from 'react-intl';
import FormItemUI from '../form/formItemUI';

import styles from '../../../assets/styles/Button.module.scss';

interface IButtonProps extends ButtonProps {
  label?: string;
}

function ButtonUI(props: IButtonProps) {
  const { label } = props;

  return (
    <FormItemUI>
      <Button className={styles.baseButton} {...props}>
        <FormattedMessage id={label} />
      </Button>
    </FormItemUI>
  );
}

export default ButtonUI;
