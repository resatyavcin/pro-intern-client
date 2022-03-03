import React, { Fragment, useState } from 'react';
import { Input, InputProps } from 'antd';
import { Controller, Control, FieldValues } from 'react-hook-form';
import FormItemUI from './formItemUI';
import { Rule } from 'antd/lib/form';
import { Typography } from 'antd';
import isEmpty from 'is-empty';
const { Text } = Typography;

export interface StringMap {
  [key: string]: string;
}

interface IInputProps extends InputProps {
  control: Control<FieldValues, object> | undefined;
  name: string;
  label?: string;
  type?: string;
  rules?: Rule[] | undefined;
  errors: { [key: string]: { [key: string]: { type: string } } };
}

function InputUI(props: IInputProps) {
  const { name, label, control, rules, errors } = props;
  const [blurControl, setBlurControl] = useState<string[]>([]);

  function validateStatus<T extends object>(errors: T) {
    if (!isEmpty(errors) && Object.keys(errors).includes(`${name}`)) return 'error';
    if (!isEmpty(errors) || blurControl.includes(`${name}`)) return 'success';
    return '';
  }

  console.log(blurControl.includes(`${name}`));
  return (
    <Fragment>
      <FormItemUI
        errorLabel={!isEmpty(errors) ? true : false}
        name={name}
        label={label}
        rules={rules}
        hasFeedback
        validateStatus={validateStatus(errors)}
      >
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => {
            return (
              <Input
                type={name}
                name={name}
                onBlur={() => {
                  setBlurControl(() => {
                    if (value === undefined) {
                      return [];
                    }
                    return [...blurControl, `${name}`];
                  });
                }}
                onChange={onChange}
                value={value}
              />
            );
          }}
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
