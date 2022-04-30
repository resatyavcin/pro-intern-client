//react & next
import React, { Fragment } from 'react';
import Link from 'next/link';

//components
import ButtonUI from '../ui/button/buttonUI';
import CardUI from '../ui/card/cardUI';
import TypographyUI from '../ui/typography/Typography';

import { Divider } from 'antd';
import { ClockCircleFilled, CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons';
import { Steps } from 'antd';
import { Intern } from '../../common/models/Intern/Intern';

import { Alert } from 'antd';

const { Step } = Steps;

interface IInternCard {
  point: number;
  intern: Intern;
}

function InternCard(props: IInternCard) {
  const { point, intern } = props;

  const pointStep = (statusCode: String) => {
    switch (statusCode) {
      case 'STS-1':
        return 0;
      case 'STS-2':
        return 1;
      case 'STS-3':
        return 2;
      case 'STS-4':
        return 3;
      case 'STS-5':
        return 4;
      default:
        return 0;
    }
  };

  const stepControl = (stepPoint: number) => (
    <Fragment>
      {pointStep(intern.status) === stepPoint && !intern.completed
        ? 'Şu an buradasınız'
        : pointStep(intern.status) > stepPoint || intern.completed
        ? 'Tamamlandı'
        : 'Tamamlanmadı'}

      {pointStep(intern.status) === stepPoint && !intern.completed ? (
        <ClockCircleFilled style={{ marginLeft: 6, color: '#068ee9' }} />
      ) : pointStep(intern.status) > stepPoint || intern.completed ? (
        <CheckCircleFilled style={{ marginLeft: 6, color: '#29b303' }} />
      ) : (
        <CloseCircleFilled style={{ marginLeft: 6, color: '#c4c4c4' }} />
      )}
    </Fragment>
  );

  return (
    <div style={{ marginBottom: 23 }}>
      {pointStep(intern.status) === 0 && (
        <Alert
          style={{ marginBottom: 20 }}
          message="Ön Evrak Aşaması"
          description="Bu aşamaya geçilmesi ayarlar kısmından imzanızı kaydedip, belgeyi imzalamanız gerekmektedir."
          type="warning"
          showIcon
        />
      )}

      <CardUI cardType="normal">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <TypographyUI
              typographytype="title"
              level={3}
              label={
                intern.completed
                  ? `${intern.companyName} Inc.`
                  : `${intern.companyName} Inc.  (${pointStep(intern.status) + 1}/5)`
              }
            />
            <TypographyUI
              typographytype="text"
              label={
                intern.completed
                  ? `${point}. Staj Dönemi Çevik Çözüm Inc. şirketinde başarı ile tamamlanmıştır.`
                  : `${point}. Staj Dönemi Devam Ediyor.`
              }
            />{' '}
            <br />
          </div>
          <Link href={`/intern-detail?id=${intern._id}`}>
            <ButtonUI type="dashed" label="BUTTON_LABEL.DETAILS" />
          </Link>
        </div>

        <Divider />

        <Steps current={pointStep(intern.status)} progressDot>
          <Step title="Ön Evrak Aşaması" subTitle={<Fragment>{stepControl(0)}</Fragment>} />
          <Step title="Ön Evrak Onayı" subTitle={<Fragment>{stepControl(1)}</Fragment>} />
          <Step title="Staj Süreci" subTitle={<Fragment>{stepControl(2)}</Fragment>} />
          <Step title="Son Evrak Aşaması" subTitle={<Fragment>{stepControl(3)}</Fragment>} />
          <Step title="Son Evrak Onayı" subTitle={<Fragment>{stepControl(4)}</Fragment>} />
        </Steps>
      </CardUI>
    </div>
  );
}

export default InternCard;
