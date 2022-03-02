import React from 'react';
import { Row, Col } from 'antd';

const AuthLayout = (props: any) => {
  const { children } = props;

  return (
    <div>
      <Row style={{ maxWidth: '540px', margin: '0 auto', padding: '70px 24px' }}>
        <Col span={24}>{children}</Col>
      </Row>
    </div>
  );
};

export default AuthLayout;
