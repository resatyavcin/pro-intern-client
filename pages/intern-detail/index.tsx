import React from 'react';
import MainLayout from '../../core/MainLayout';
import { PRIVATE_ROUTE_CONFIG } from '../../routes/privateRoute';
import { FileProtectOutlined, LockFilled, UnlockFilled, FilePdfFilled } from '@ant-design/icons';
import TypographyUI from '../../components/ui/typography/Typography';
import { Divider } from 'antd';
import CardUI from '../../components/ui/card/cardUI';
import InternFileSmallPreview from '../../components/intern-file-small-preview/InternFileSmallPreview';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Files() {
  const router = useRouter();

  return (
    <MainLayout>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <CardUI cardType="normal" style={{ marginBottom: 20 }}>
          <div>
            <TypographyUI typographytype="title" level={3} label={'Açılan Dosyalar'} />
            <Divider style={{ marginTop: 0 }} />
          </div>
          <Link href={`/intern-detail/file/?intern_id=${router.query.id}&file_id=0`}>
            <div>
              <InternFileSmallPreview lockFile={false} />
            </div>
          </Link>
        </CardUI>

        <CardUI cardType="normal">
          <div>
            <TypographyUI typographytype="title" level={3} label={'Kilitli Dosyalar'} />
            <Divider style={{ marginBottom: 20, marginTop: 0 }} />
          </div>
          <div style={{ display: 'flex' }}>
            <InternFileSmallPreview lockFile />
            <InternFileSmallPreview lockFile />
          </div>
        </CardUI>
      </div>
    </MainLayout>
  );
}

export default Files;

export async function getServerSideProps() {
  return {
    props: { ...PRIVATE_ROUTE_CONFIG.INTERN_DETAILS }
  };
}
