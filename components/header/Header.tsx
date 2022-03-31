import React from 'react';

import styles from '../../assets/styles/Header.module.scss';

import { Avatar, Menu } from 'antd';
import { Logo } from '../../assets/icons/Logo';

function HeaderUI() {
  return (
    <div style={{ borderBottom: '1px solid #d5d5d57d' }}>
      <Menu
        style={{ borderBottom: 'none', display: 'flex', alignItems: 'center' }}
        mode="horizontal"
        defaultSelectedKeys={['2']}
      >
        <div style={{ flexGrow: 1 }}>{Logo()}</div>
        <Avatar size="small" style={{ background: 'rgb(29,25,25)', marginRight: 90 }}>
          RY
        </Avatar>
      </Menu>
    </div>
  );
}

export default HeaderUI;
