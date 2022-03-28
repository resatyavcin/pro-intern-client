import { Badge, Col, List, Menu, Row, Spin } from 'antd';
import React, { useState } from 'react';

import TimelineUI from '../ui/timeline/Timeline';

import { useStudent } from '../../context/StudentContext';
import TypographyUI from '../ui/typography/Typography';
import { Avatar } from 'antd';

function PreviewProfile() {
  const [current, setCurrent] = useState('app1');

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };
  return (
    <Spin spinning={true ? false : true} delay={500}>
      <div style={{ marginBottom: 140 }}>
        <Row>
          <Col xs={20}></Col>
          <Col xs={24}></Col>
        </Row>
      </div>
      {/* <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="app1">Aktiviteler</Menu.Item>
        <Menu.Item key="app2">Dosyalar</Menu.Item>
        <Menu.Item key="app3">
          <Badge count={20} offset={[10, -10]}>
            Soru-Cevap
          </Badge>
        </Menu.Item>
      </Menu>
      {current === 'app1' ? (
        <TimelineUI
          style={{ marginTop: 40 }}
          events={[
            { label: 'TIMELINE_INTERN_FILES_PROGRESS.0' },
            { label: 'TIMELINE_INTERN_FILES_PROGRESS.1', active: true },
            {
              label: 'TIMELINE_INTERN_FILES_PROGRESS.2'
            },
            { label: 'TIMELINE_INTERN_FILES_PROGRESS.3' }
          ]}
        />
      ) : null} */}
    </Spin>
  );
}

export default PreviewProfile;
