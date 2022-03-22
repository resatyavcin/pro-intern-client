//import React
import React from 'react';

//import Styles
import styles from '../assets/styles/Sidebar.module.scss';

//import Components
// import SidebarUI from '../components/sidebar/sidebar';
// import HeaderUI from '../components/header/Header';

import { Layout } from 'antd';

const Content = Layout;

const MainLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <Layout style={{ height: '100vh' }}>
      {/* <SidebarUI /> */}

      <Layout className={styles.siteLayout}>
        {/* <HeaderUI /> */}

        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
