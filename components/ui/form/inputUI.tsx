import React, { Fragment, useState } from 'react';
import { Input, InputProps } from 'antd';
import { Controller, Control, FieldValues } from 'react-hook-form';
import FormItemUI from './formItemUI';
import { Rule } from 'antd/lib/form';
import { Typography } from 'antd';
import isEmpty from 'is-empty';
const { Text } = Typography;

interface IInputProps extends InputProps {
  control: Control<FieldValues, object> | undefined;
  name: string;
  label?: string;
  type?: string;
  rules?: Rule[] | undefined;
  errors: string;
}

function InputUI(props: IInputProps) {
  const { name, label, control, rules, errors } = props;
  const [blurControl, setBlurControl] = useState<string[]>([]);

  function validateStatus<T extends string | undefined>(errors: T) {
    if (!isEmpty(errors) && Object.keys(errors).includes(`${name}`)) return 'error';
    if (!isEmpty(errors) || blurControl.includes(`${name}`)) return 'success';
    return '';
  }

  console.log(blurControl.includes(`${name}`));
  return (
    <Fragment>
      <FormItemUI
        errorLabel={validateStatus(errors) ? true : false}
        name={name}
        label={label}
        rules={rules}
        hasFeedback
        validateStatus={validateStatus(errors)}
      >
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <Input
              type={name}
              name={name}
              onBlur={() => {
                setBlurControl([blurControl, `${name}`]);
              }}
              onChange={onChange}
              value={value}
            />
          )}
        />
      </FormItemUI>
      {errors ? (
        <div style={{ marginBottom: '18px' }}>
          <Text type="danger">{errors?.[name]?.message}</Text>
        </div>
      ) : null}
    </Fragment>
  );
}

export default InputUI;
{
  /* <InputMask mask="+\9\0 999 999 99 99" maskPlaceholder={''}>
{() => <Input {...props} />}
</InputMask> */
}
