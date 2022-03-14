import { Badge, Col, List, Menu, Row, Spin } from 'antd';
import React, { useState } from 'react';

import TimelineUI from '../timeline/Timeline';

import { useStudent } from '../../context/StudentContext';
import CardUI from '../ui/card/cardUI';
import TypographyUI from '../typography/Typography';
import { Avatar } from 'antd';

function PreviewProfile() {
  const [current, setCurrent] = useState('app1');

  const { selectStudent, setSelectStudent } = useStudent();

  const handleClick = (e: any) => {
    setCurrent(e.key);
  };
  return (
    <Spin spinning={selectStudent ? false : true} delay={500}>
      <div style={{ marginBottom: 140 }}>
        {selectStudent ? (
          <Row>
            <Col xs={20}>
              <TypographyUI
                label={'İmza'}
                typographyType="paragraph"
                copyable={{ text: `${selectStudent.student_no}` }}
              />
              <TypographyUI typographyType="text" strong label="Ad Soyad: " />
              <TypographyUI
                typographyType="text"
                italic
                label={`${selectStudent.first_name} ${selectStudent.last_name}`}
              />{' '}
              <br />
              <br />
            </Col>
            <Col>
              <Avatar size={57} style={{ backgroundColor: 'orange' }}>
                {selectStudent?.first_name.charAt(0).toUpperCase()}
                {selectStudent?.last_name.charAt(0).toUpperCase()}
              </Avatar>
            </Col>
            <Col xs={24}>
              <List
                bordered
                dataSource={['Merhaba', 'MErhaba']}
                renderItem={(item) => (
                  <List.Item>
                    <TypographyUI typographyType="text" strong label="1. Staj: " />
                  </List.Item>
                )}
              />
            </Col>
          </Row>
        ) : null}
      </div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
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
      ) : null}
    </Spin>
  );
}

export default PreviewProfile;
