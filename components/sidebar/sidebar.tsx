import React, { useState } from 'react';

import { UserOutlined } from '@ant-design/icons';

import { Layout, Menu, LayoutProps } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Sider } = Layout;

import styles from '../../assets/styles/Header.module.scss';

interface ISider extends LayoutProps {
  collapsed?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onCollapse?: () => void;
  width?: number;
  collapsedWidth?: number;
}
function SidebarUI(props: ISider) {
  const { collapsed, collapsedWidth, children, width, style } = props;
  return (
    <Sider collapsedWidth={collapsedWidth} width={width} style={style} trigger={null} collapsed={collapsed} collapsible>
      {children}
    </Sider>
  );
}

export default SidebarUI;
