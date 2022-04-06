import React from 'react';

import styles from '../../assets/styles/Header.module.scss';

import { Avatar, Col, Divider, Dropdown, Menu, Row, Tag } from 'antd';
import { Logo } from '../../assets/icons/Logo';
import { Button } from 'antd';

const menu = (
  <Menu style={{ minWidth: '260px', padding: 14 }}>
    <Row style={{ display: 'flex', alignItems: 'center' }}>
      <Col xs={4}>
        <Avatar style={{ background: '#522725' }}>RY</Avatar>
      </Col>
      <Col xs={20}>
        Reşat YAVÇİN <br /> <span style={{ color: 'gray' }}>resatyavcin@icloud.com</span>
      </Col>
    </Row>

    <Menu.Item>Ayarlar</Menu.Item>
    <Menu.Item>Çıkış</Menu.Item>
  </Menu>
);
function HeaderUI() {
  return (
    <div style={{ borderBottom: '1px solid #d5d5d57d' }}>
      <Menu
        style={{ borderBottom: 'none', display: 'flex', alignItems: 'center' }}
        mode="horizontal"
        defaultSelectedKeys={['2']}
      >
        <div style={{ flexGrow: 1 }}>{Logo()}</div>

        <Dropdown overlay={menu} placement="bottomLeft" arrow>
          <Avatar size="small" style={{ background: 'rgb(29,25,25)', marginRight: 90 }}>
            RY
          </Avatar>
        </Dropdown>
      </Menu>
    </div>
  );
}

export default HeaderUI;
