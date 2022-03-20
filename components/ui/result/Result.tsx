import React from 'react';
import { Result } from 'antd';
import ButtonUI from '../button/buttonUI';

function ResultUI() {
  return (
    <Result
      status="success"
      title="Staj Başvuru Talebiniz Başarıyla Alınmıştır."
      subTitle="Staj ID: KJ925GREF93FE45. Lütfen staj başvuru talebinizin öğrenci işleri tarafından onayı için 1-3 iş günü bekleyiniz."
      extra={[
        <ButtonUI key="console" label={'Geri Dön'} />,
        <ButtonUI type="primary" key="console" label={'Geri Dön'} />
      ]}
    />
  );
}

export default ResultUI;
