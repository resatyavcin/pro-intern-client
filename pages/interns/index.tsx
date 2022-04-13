import React, { Fragment, useState, useEffect } from 'react';
import MainLayout from '../../core/MainLayout';
import { PRIVATE_ROUTE_CONFIG } from '../../routes/privateRoute';
import { Collapse, Divider } from 'antd';
import { useIntern } from '../../context/InternContext';
import ResultUI from '../../components/ui/result/Result';
import CardUI from '../../components/ui/card/cardUI';
import TypographyUI from '../../components/ui/typography/Typography';

import { Steps, Popover } from 'antd';
import ButtonUI from '../../components/ui/button/buttonUI';

import { ClockCircleFilled, CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';

const { Step } = Steps;

function Interns() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const { allInterns } = useIntern();

  useEffect(() => {
    //console.log(allInterns);
  }, []);

  return (
    <MainLayout>
      <CardUI cardType="normal">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <TypographyUI typographyType="title" level={3} label="Çevik Çözüm Inc. (2/4)" />
            <TypographyUI typographyType="text" label="1. Staj Dönemi" /> <br />
          </div>
          <ButtonUI type="dashed" label="Detaylara git" />
        </div>

        <Divider />
        <Steps current={1} progressDot>
          <Step
            title="Başvuru Aşaması"
            subTitle={
              <Fragment>
                Tamamlandı
                <CheckCircleFilled style={{ marginLeft: 6, color: '#29b303' }} />
              </Fragment>
            }
          />
          <Step
            title="Ön Evrak Aşaması"
            subTitle={
              <Fragment>
                2 gün 10 saat kaldı
                <ClockCircleFilled style={{ marginLeft: 6, color: '#068ee9' }} />
              </Fragment>
            }
          />
          <Step
            title="Staj Süreci"
            subTitle={
              <Fragment>
                Tamamlanmadı
                <CloseCircleFilled style={{ marginLeft: 6 }} />
              </Fragment>
            }
          />
          <Step
            title="Son Evrak Aşaması"
            subTitle={
              <Fragment>
                Tamamlanmadı
                <CloseCircleFilled style={{ marginLeft: 6 }} />
              </Fragment>
            }
          />
        </Steps>
      </CardUI>

      {allInterns.length !== 0 ? (
        <ResultUI
          status="warning"
          subTitle="INTERN.NO_INTERNSHIP_SUBTITLE"
          title="INTERN.NO_INTERNSHIP_TITLE"
          leftButtonLabel="BUTTON.MAKE_AN_APPLICATION"
          leftButtonOnClick={showModal}
        />
      ) : (
        <Fragment>Başvuru yapıldı</Fragment>
      )}
    </MainLayout>
  );
}

export default Interns;

export async function getServerSideProps() {
  return {
    props: { ...PRIVATE_ROUTE_CONFIG.INTERNS }
  };
}
