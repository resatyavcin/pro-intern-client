import React, { Fragment, useEffect, useState } from 'react';
import MainLayout from '../../core/MainLayout';
import { PRIVATE_ROUTE_CONFIG } from '../../routes/privateRoute';
import { FilePdfFilled } from '@ant-design/icons';
import TypographyUI from '../../components/ui/typography/Typography';

import Link from 'next/link';
import TableUI from '../../components/ui/table/Table';
import CardUI from '../../components/ui/card/cardUI';
import { useIntern } from '../../context/InternContext';
import { useRouter } from 'next/router';
import { Intern } from '../../common/models/Intern/Intern';
import { PageHeader, Descriptions } from 'antd';

import { Tag } from 'antd';
import moment from 'moment';

const columns = [
  {
    title: <TypographyUI typographytype="text" label={'Dosya İsmi'} />,
    dataIndex: 'fileName',
    key: 'created_at',
    render: (text: any, record: any) => (
      <Fragment>
        <FilePdfFilled style={{ marginRight: 10 }} />
        <Link
          href={`/intern-detail/file?intern_id=${record.intern_id}&file_id=${record._id}&file_interval=${record.file_interval}&student_signature_area=${record.student_signature_area}&admin_signature_area=${record.admin_signature_area}`}
        >
          {text}
        </Link>
      </Fragment>
    )
  },
  {
    title: <TypographyUI typographytype="text" label={'Oluşturulma Tarihi'} />,
    dataIndex: 'created_at',
    key: 'created_at',
    render: (text: any) => <TypographyUI typographytype="text" label={text} />
  }
];

function Files() {
  const [checkStrictly] = useState(false);
  const [internDetail, setInternDetail] = useState<Intern>();

  const router = useRouter();

  // rowSelection objects indicates the need for row selection
  const rowSelection = {
    onChange: () => {
      console.log('first');
    }
  };

  const { fetchIntern } = useIntern();

  useEffect(() => {
    const init = async () => {
      const data = await fetchIntern(router.query.id);

      return data;
    };
    const intern = init();

    intern.then((data) => {
      console.log(data);
      if (data !== undefined) {
        setInternDetail(data);
      }
    });
  }, []);

  const data = [
    {
      _id: 'dosya001',
      file_interval: 2,
      fileName: 'basvuru_dosyasi.pdf',
      created_at: '22/09/2000',
      student_signature_area: [2],
      admin_signature_area: [2],
      intern_id: internDetail?._id
    }
  ];

  return (
    <MainLayout>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title={internDetail?.companyName}
        subTitle={internDetail?.companyActivityArea}
        tags={<Tag color="blue">Ön Evrak Aşamasında</Tag>}
      >
        <CardUI cardType={'normal'} style={{ marginBottom: 20 }}>
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="Email">
              <a>{internDetail?.companyEmail}</a>
            </Descriptions.Item>
            <Descriptions.Item label="Telefon Numarası">{internDetail?.companyPhone}</Descriptions.Item>
            <Descriptions.Item label="Çalışan Sayısı">{internDetail?.companyTotalNumberOfEmployees}</Descriptions.Item>

            <Descriptions.Item label="Fax">{internDetail?.companyFax}</Descriptions.Item>
          </Descriptions>
        </CardUI>

        <CardUI cardType={'normal'}>
          <Descriptions size="small" column={3}>
            <Descriptions.Item label="Staj Başvuru Tarihi">
              {moment(internDetail?.createdAt).format('MM/DD/YYYY')}
            </Descriptions.Item>

            <Descriptions.Item label="Staj Başlangıç Tarihi">
              {moment(internDetail?.startDate).format('MM/DD/YYYY')}
            </Descriptions.Item>
            <Descriptions.Item label="Staj Başlangıç Tarihi">
              {moment(internDetail?.endDate).format('MM/DD/YYYY')}
            </Descriptions.Item>
            <Descriptions.Item label="Staj Türü">{internDetail?.internshipPeriod}</Descriptions.Item>
          </Descriptions>
        </CardUI>
      </PageHeader>

      <CardUI cardType={'normal'} style={{ margin: '16px 24px' }}>
        <TableUI keyOf={'_id'} rowSelection={{ ...rowSelection, checkStrictly }} data={data} columns={columns} />
      </CardUI>
    </MainLayout>
  );
}

export default Files;

export async function getServerSideProps() {
  return {
    props: { ...PRIVATE_ROUTE_CONFIG.INTERN_DETAILS }
  };
}
