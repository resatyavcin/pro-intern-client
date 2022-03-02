import React from 'react';
import { Row, Col } from 'antd';

const AuthLayout = (props: any) => {
  const { children } = props;

  return (
    <div style={{ maxWidth: '420px' }}>
      <Row justify="center" align="middle">
        <Col span={24}>{children}</Col>
      </Row>
    </div>
  );
};

export default AuthLayout;
