import React from 'react';
import { Row, Col } from 'antd';

const AuthLayout = (props: any) => {
  const { children } = props;

  return (
    <Row style={{ maxWidth: '380px', margin: '60px auto' }}>
      <Col span={24}>{children}</Col>
    </Row>
  );
};

export default AuthLayout;
