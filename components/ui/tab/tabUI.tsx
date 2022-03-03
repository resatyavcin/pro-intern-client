import React from 'react';
import { Tabs, TabsProps } from 'antd';

interface ITabsProps extends TabsProps {}

function TabUI(props: ITabsProps) {
  const { children } = props;

  return <Tabs {...props}>{children}</Tabs>;
}

export default TabUI;
