import React, { useState } from 'react';

import { UserOutlined } from '@ant-design/icons';

import styles from '../../assets/styles/Header.module.scss';

import { Avatar, Dropdown, Layout, Menu, Typography } from 'antd';

const { Text } = Typography;
const { Header } = Layout;

const menu = (
  <Menu style={{ backgroundColor: '#f9f9f9' }}>
    <Menu.Item style={{ backgroundColor: '#fff' }} key="0">
      <Text disabled>@resatyavcin</Text>
      <Avatar shape="square" size="small" icon={<UserOutlined />} />
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Yardım
      </a>
    </Menu.Item>
    <Menu.Item key="2">
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        Ayarlar
      </a>
    </Menu.Item>
    <Menu.Item key="3">
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        Geri Bildirim
      </a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="4">Çıkış Yap</Menu.Item>
  </Menu>
);

function HeaderUI() {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Header className={styles.siteLayoutBackground} style={{ padding: 0 }}>
      <Dropdown overlay={menu}>
        <Avatar size={42}>RY</Avatar>
      </Dropdown>
    </Header>
  );
}

export default HeaderUI;
