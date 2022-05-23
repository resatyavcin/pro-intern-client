//react & next
import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';

//layout
import MainLayout from '../../core/MainLayout';

//styles
import styles from '../../assets/styles/PdfFile.module.scss';

//utils
import { Document, Page, pdfjs } from 'react-pdf';
import { PRIVATE_ROUTE_CONFIG } from '../../routes/privateRoute';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Col, Row, Spin } from 'antd';

import SignatureAction from '../../components/signatureActions/signatureAction';

import { useIntern } from '../../context/InternContext';

import { ApplicationFile } from '../../components/files/applicationFile';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function File() {
  const [pageNumber, setPageNumber] = useState(1);
  const [interval, setInterval] = useState<number>(1);
  const [page, setPage] = useState<Blob>();
  const router = useRouter();

  const { processSignatureFile } = useIntern();

  const getPage = (signatures: any) => {
    let pdf;
    let { file_id } = router.query;

    if (file_id === 'dosya001') {
      pdf = ApplicationFile(signatures);
    }

    pdf?.then((data) => {
      const blob = new Blob([new Uint8Array(data)]);
      setPage(blob);
    });
  };

  const getSignature = () => {
    let { file_id, intern_id } = router.query;

    const init = async () => {
      const signs = await processSignatureFile(file_id as string, intern_id as string, pageNumber);
      return signs;
    };

    init().then((data: any) => {
      getPage(data);
    });
  };

  useEffect(() => {
    let value_range = 1;
    let { file_interval } = router.query;

    value_range = parseInt(file_interval as string);
    setInterval(value_range);

    getSignature();
  }, [pageNumber]);

  return (
    <MainLayout>
      <Row>
        <Col span={12}>
          <Spin spinning={page && false}>
            <Document className={styles.pageWrapper} file={page}>
              <Page className={styles.page} height={700} pageNumber={pageNumber}>
                <div style={{ display: 'flex', alignItems: 'center' }} className={styles.pageNumber}>
                  <div
                    onClick={() => {
                      if (pageNumber > 1) {
                        setPageNumber(pageNumber - 1);
                      }
                    }}
                    style={{ padding: 3, borderRight: '1px solid rgba(111, 156, 194, 0.123)' }}
                  >
                    <LeftOutlined />
                  </div>
                  <div style={{ padding: 10 }}>
                    {pageNumber} of {interval}
                  </div>
                  <div
                    onClick={() => {
                      if (pageNumber < interval) {
                        setPageNumber(pageNumber + 1);
                      }
                    }}
                    style={{ padding: 3, borderLeft: '1px solid rgba(111, 156, 194, 0.123)' }}
                  >
                    <RightOutlined />
                  </div>
                </div>
              </Page>
            </Document>
          </Spin>
        </Col>
        <Col span={12}>
          <SignatureAction pageNumber={pageNumber} />
        </Col>
      </Row>
    </MainLayout>
  );
}

export default File;

export async function getServerSideProps() {
  return {
    props: { ...PRIVATE_ROUTE_CONFIG.FILES }
  };
}
