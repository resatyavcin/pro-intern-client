import React from 'react';
import { Row, Col } from 'antd';

const AuthLayout = (props: any) => {
  const { children } = props;

  return (
    <div>
      <Row style={{ maxWidth: '420px', margin: '60px auto' }}>
        <Col span={24}>{children}</Col>
      </Row>
    </div>
  );
};

export default AuthLayout;
