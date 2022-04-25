import React from 'react';
import MainLayout from '../core/MainLayout';
import { PRIVATE_ROUTE_CONFIG } from '../routes/privateRoute';
import { FileProtectOutlined, LockFilled, UnlockFilled, FilePdfFilled } from '@ant-design/icons';
import TypographyUI from '../components/ui/typography/Typography';
import { Divider } from 'antd';
import CardUI from '../components/ui/card/cardUI';
import InternFileSmallPreview from '../components/intern-file-small-preview/InternFileSmallPreview';

function Files() {
  return (
    <MainLayout>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <CardUI cardType="normal" style={{ marginBottom: 20 }}>
          <div>
            <TypographyUI typographyType="title" level={3} label={'Açılan Dosyalar'} />
            <Divider style={{ marginTop: 0 }} />
          </div>

          <InternFileSmallPreview lockFile={false} />
        </CardUI>

        <CardUI cardType="normal">
          <div>
            <TypographyUI typographyType="title" level={3} label={'Kilitli Dosyalar'} />
            <Divider style={{ marginBottom: 20, marginTop: 0 }} />
          </div>

          <InternFileSmallPreview lockFile />
        </CardUI>
      </div>
    </MainLayout>
  );
}

export default Files;

export async function getServerSideProps() {
  return {
    props: { ...PRIVATE_ROUTE_CONFIG.FILES }
  };
}
