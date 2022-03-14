import React, { useState } from 'react';

import { UserOutlined } from '@ant-design/icons';

import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Sider } = Layout;

import styles from '../../assets/styles/Header.module.scss';

function SidebarUI() {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: styles.trigger,
        onClick: toggle
      })}
      <Menu theme={'dark'} mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          Ana Sayfa
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SidebarUI;
