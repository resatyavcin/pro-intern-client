//import React
import { Row, Col } from 'antd';

//import Layout
import MainLayout from '../core/MainLayout';

//import Styles
import styles from '../assets/styles/Sidebar.module.scss';

import { Layout } from 'antd';
import PreviewProfile from '../components/preview-profile/PreviewProfile';
import ResultUI from '../components/ui/result/Result';

const { Content } = Layout;

function Dashboard() {
  return (
    <MainLayout>
      <Row gutter={[18, 0]} style={{ margin: '24px 20px' }}>
        <Col xs={20} lg={16}>
          <Content
            style={{
              padding: 24,
              minHeight: 'calc(100vh - 130px)'
            }}
            className={styles.siteLayoutBackground}
          >
            <ResultUI />
          </Content>
        </Col>
        <Col xs={20} lg={8}>
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
