//import react
import React from 'react';

//import antd
import { Select, SelectProps } from 'antd';

//import components
import FormItemUI from './FormItemUI';
import { DefaultOptionType } from 'antd/lib/select';

const { Option, OptGroup } = Select;

interface ISelectProps extends SelectProps {
  optionTitle: string;
  label?: string;
  name?: string;
}

function SelectUI(props: ISelectProps) {
  const { label, name, optionTitle } = props;

  return (
    <FormItemUI label={label} name={name}>
      <Select {...props}>
        <OptGroup label={optionTitle}></OptGroup>
      </Select>
    </FormItemUI>
  );
}

export default SelectUI;
