import React from 'react';
import { Tabs, TabPaneProps } from 'antd';

const { TabPane } = Tabs;

function TabPaneUI(props: TabPaneProps) {
  const { children } = props;

  return <TabPane {...props}>{children}</TabPane>;
}

export default TabPaneUI;
