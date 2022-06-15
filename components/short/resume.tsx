import { Avatar } from 'antd';
import React, { Fragment } from 'react';
import { useStudent } from '../../context/StudentContext';
import { Steps } from 'antd';

const { Step } = Steps;

function Resume() {
  const { selectedStudent } = useStudent();
  const selectedFirstUser = selectedStudent ? selectedStudent[0] : null;

  return (
    <div>
      {selectedFirstUser ? (
        <Fragment>
          <Avatar style={{ backgroundColor: '#c25c09' }}>
            {selectedFirstUser.firstName[0]}
            {selectedFirstUser.lastName[0]}
          </Avatar>
          <div>
            {selectedFirstUser.firstName}
            {selectedFirstUser.lastName}
          </div>
          <Steps direction="vertical" current={1}>
            <Step status="finish" title="1. Staj" description="Çevik Çözüm Inc. şirketinde yapılmıştır." />
            <Step status="wait" title="2.Staj" description="Başvuru yapılmadı." />
          </Steps>
        </Fragment>
      ) : null}
    </div>
  );
}

export default Resume;
