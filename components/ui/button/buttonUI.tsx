import React from 'react';
import { Button, ButtonProps } from 'antd';
import { FormattedMessage } from 'react-intl';
import FormItemUI from '../form/formItemUI';

interface IButtonProps extends ButtonProps {
  label?: string;
}

function ButtonUI(props: IButtonProps) {
  const { label, children } = props;
  return (
    <FormItemUI>
      <Button {...props}>
        {children}
        <FormattedMessage id={label} />
      </Button>
    </FormItemUI>
  );
}

export default ButtonUI;
