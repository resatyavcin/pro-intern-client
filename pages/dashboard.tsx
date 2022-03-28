//import React
import { Row, Col } from 'antd';

//import Layout
import MainLayout from '../core/MainLayout';

//import Styles
import styles from '../assets/styles/Sidebar.module.scss';

import { Layout } from 'antd';
import PreviewProfile from '../components/preview-profile/PreviewProfile';
import TableUI from '../components/ui/table/Table';

const { Content } = Layout;

function Dashboard() {
  return (
    <MainLayout>
      <Row gutter={[18, 0]} style={{ margin: '24px 20px' }}>
        <Col xs={20} lg={18}>
          <Content
            style={{
              padding: 24,
              minHeight: 'calc(100vh - 130px)'
            }}
            className={styles.siteLayoutBackground}
          >
            <TableUI />
          </Content>
        </Col>
        <Col xs={20} lg={6}>
          <Content
            className={styles.siteLayoutBackground}
            style={{
              padding: 24,
              minHeight: 'calc(100vh - 130px)'
            }}
          >
            <PreviewProfile />
          </Content>
        </Col>
      </Row>
    </MainLayout>
  );
}

export default Dashboard;
