import React from 'react';

import styles from '../../assets/styles/Header.module.scss';

import { Layout } from 'antd';

const Header = Layout;

function HeaderUI() {
  return <Header className={styles.siteLayoutBackground} style={{ padding: 0 }}></Header>;
}

export default HeaderUI;
