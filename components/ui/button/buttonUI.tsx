import React from 'react';
import { Button, ButtonProps } from 'antd';
import { FormattedMessage } from 'react-intl';
import FormItemUI from '../form/FormItemUI';

interface IButtonProps extends ButtonProps {
  label: string;
}

function ButtonUI(props: IButtonProps) {
  const { label } = props;
  return (
    <FormItemUI>
      <Button {...props}>
        <FormattedMessage id={label} />
      </Button>
    </FormItemUI>
  );
}

export default ButtonUI;
