//react & next
import React, { useEffect, useState } from 'react';

//layout
import MainLayout from '../../core/MainLayout';

//styles
import styles from '../../assets/styles/PdfFile.module.scss';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

//utils
import { Document, Page, pdfjs } from 'react-pdf';
import { PDFDocument, PDFPage, rgb, StandardFonts } from 'pdf-lib';
import { PRIVATE_ROUTE_CONFIG } from '../../routes/privateRoute';
import { useRouter } from 'next/router';
import { useIntern } from '../../context/InternContext';
import { Intern } from '../../common/models/Intern/Intern';
import ButtonUI from '../../components/ui/button/buttonUI';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function File() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(2);
  const [intern, setIntern] = useState(2);
  const [page, setPage] = useState<Blob>();
  const router = useRouter();

  const { fetchIntern, signatureByStudent } = useIntern();

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  async function rapor_onay() {
    const url = '../rapor_onay.pdf';
    const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const pages = pdfDoc.getPages();

    const drawTextArea = (page: PDFPage, value: string, coord: { x: number; y: number }, divide?: number) => {
      if (divide) {
        value = value.slice(0, divide) + '\n' + value.slice(divide);
      }
      page.drawText(value, {
        x: coord.x,
        y: coord.y,
        size: 11,
        font: helveticaFont,
        color: rgb(0, 0, 0)
      });
    };

    const firstPage = pages[0];

    // !warning -Global Size-
    const { width, height } = firstPage.getSize();

    // Name Surname
    drawTextArea(firstPage, 'Resat YAVCIN', { x: width - 1.85 * 100, y: height / 2 + 40 });
    //Grade / School No
    drawTextArea(firstPage, '2 / 181906114', { x: width - 1.85 * 100, y: height / 2 + 15 });
    //Company Name
    drawTextArea(firstPage, 'ID3', { x: width - 1.85 * 100, y: height / 2 - 12 });
    //Intern start, end date range
    drawTextArea(firstPage, '22/09/22-22/10/22', { x: width - 1.85 * 100, y: height / 2 - 38 });

    const secondPage = pages[1];

    // Name Surname
    drawTextArea(secondPage, 'Resat YAVCIN', { x: width - 360, y: height - 168 });
    //Grade / School No
    drawTextArea(secondPage, '2 / 181906114', { x: width - 360, y: height - 193 });
    //Company Name
    drawTextArea(
      secondPage,
      'ID3 - Kaput mahallesi, Atatürk caddesi, 89. Sokak, 6 / 3 Sisli / Istanbul',
      {
        x: width - 360,
        y: height - 217
      },
      40
    );

    drawTextArea(secondPage, '22/09/22', {
      x: width - 360,
      y: height - 343
    });

    drawTextArea(secondPage, '22/09/22', {
      x: width - 360,
      y: height - 366
    });

    drawTextArea(secondPage, '22/09/22', {
      x: width - 360,
      y: height - 391
    });

    const thirdPage = pages[2];

    let summary = [
      { date: '22/09/2000', workDone: 'Bu gun spring boot çalistik' },
      { date: '22/09/2000', workDone: 'Bu gun spring boot çalistik' },
      { date: '22/09/2000', workDone: 'Bu gun spring boot çalistik' },
      { date: '22/09/2000', workDone: 'Bu gun spring boot çalistik' },
      { date: '22/09/2000', workDone: 'Bu gun spring boot çalistik' },
      { date: '22/09/2000', workDone: 'Bu gun spring boot çalistik' },
      { date: '22/09/2000', workDone: 'Bu gun spring boot çalistik' },
      { date: '22/09/2000', workDone: 'Bu gun spring boot çalistik' },
      { date: '22/09/2000', workDone: 'Bu gun spring boot çalistik' },
      { date: '22/09/2000', workDone: 'Bu gun spring boot çalistik' },
      { date: '22/09/2000', workDone: 'Bu gun spring boot çalistik' },
      { date: '22/09/2000', workDone: 'Bu gun spring boot çalistik' },
      { date: '22/09/2000', workDone: 'Bu gun spring boot çalistik' },
      { date: '22/09/2000', workDone: 'Bu gun spring boot çalistik' },
      { date: '22/09/2000', workDone: 'Bu gun spring boot çalistik' },
      { date: '22/09/2000', workDone: 'Bu gun spring boot çalistik' },
      { date: '22/09/2000', workDone: 'Bu gun spring boot çalistik' },
      { date: '22/09/2000', workDone: 'Bu gun spring boot çalistik' },
      { date: '22/09/2000', workDone: 'Bu gun spring boot çalistik' },
      { date: '22/09/2000', workDone: 'Bu gun spring boot çalistik' }
    ];

    summary.map((daily, i) => {
      drawTextArea(thirdPage, daily.date, {
        x: width - 510,
        y: height - (163 + i * 28.65)
      });

      drawTextArea(thirdPage, daily.workDone, {
        x: width - 370,
        y: height - (163 + i * 28.65)
      });
    });

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  }

  async function basvuru_belgesi() {
    const url = '../basvuru-belgesi.pdf';
    const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const pages = pdfDoc.getPages();

    const drawTextArea = (page: PDFPage, value: string, coord: { x: number; y: number }, divide?: number[]) => {
      if (divide) {
        let str = '';
        let count = 0;
        const divideLength = divide.length;

        divide.map((number, i) => {
          if (i === divideLength - 1) {
            let valueSliceO = value.slice(count, value.length);
            str += valueSliceO;
          } else {
            let valueSlice = value.slice(count, number + count) + '\n';
            count = count + number;
            str += valueSlice;
          }
        });

        value = str;
      }

      page.drawText(value, {
        x: coord.x,
        y: coord.y,
        size: 11,
        font: helveticaFont,
        color: rgb(0, 0, 0)
      });
    };

    const secondPage = pages[1];

    // !warning -Global Size-
    const { width, height } = secondPage.getSize();

    const signature = intern.signatureByStudent;
    const signatureByte = await fetch(signature).then((res) => res.arrayBuffer());
    const signatureImage = await pdfDoc.embedPng(signatureByte);

    secondPage.drawImage(signatureImage, { width: 80, height: 50, opacity: 1, x: 100, y: 100 });

    drawTextArea(secondPage, '181906114', { x: width - 1.85 * 230, y: height / 2 + 308 });
    drawTextArea(secondPage, 'Bilgisayar Mühendisligi', { x: width - 1.85 * 230, y: height / 2 + 287.5 });
    drawTextArea(secondPage, '4', { x: width - 1.85 * 230, y: height / 2 + 267.5 });

    drawTextArea(secondPage, '22/09/2020', { x: width - 1.85 * 230, y: height / 2 + 208.5 });
    drawTextArea(secondPage, '22/10/2020', { x: width - 1.85 * 120, y: height / 2 + 208.5 });

    //Öğrencinin Nüfus Adresi
    drawTextArea(secondPage, 'ad soyad', { x: width - 1.85 * 230, y: height / 2 + 158 });
    drawTextArea(secondPage, 'tc', { x: width - 1.85 * 230, y: height / 2 + 138 });
    drawTextArea(secondPage, 'baba adi', { x: width - 1.85 * 230, y: height / 2 + 118 });
    drawTextArea(secondPage, 'anne adi', { x: width - 1.85 * 230, y: height / 2 + 98 });
    drawTextArea(secondPage, 'dogum yeri', { x: width - 1.85 * 230, y: height / 2 + 78 });
    drawTextArea(secondPage, 'dogum tarihi', { x: width - 1.85 * 230, y: height / 2 + 58 });

    drawTextArea(
      secondPage,
      'adresssssadresssssadresssssadresssssadresssss',
      {
        x: width - 1.85 * 130,
        y: height / 2 + 158
      },
      [35, 35]
    );
    drawTextArea(secondPage, 'ev tel', { x: width - 1.85 * 130, y: height / 2 + 98 });
    drawTextArea(secondPage, 'cep tel', { x: width - 1.85 * 130, y: height / 2 + 78 });
    drawTextArea(secondPage, 'e-posta', { x: width - 1.85 * 130, y: height / 2 + 58 });
    //Staj Yapılan Yer Bilgileri
    drawTextArea(secondPage, 'Staj yeri ad', { x: width - 1.85 * 230, y: height / 2 + 4 });
    drawTextArea(secondPage, 'Staj yeri adres', { x: width - 1.85 * 230, y: height / 2 - 16.5 });
    drawTextArea(secondPage, 'Staj yeri faaliyet alani', { x: width - 1.85 * 230, y: height / 2 - 37 });
    drawTextArea(secondPage, 'Staj yeri toplam calisan', { x: width - 1.85 * 230, y: height / 2 - 57 });
    drawTextArea(secondPage, 'Staj yeri telefon', { x: width - 1.85 * 230, y: height / 2 - 76.5 });
    drawTextArea(secondPage, 'Staj yeri Fax', { x: width - 1.85 * 230, y: height / 2 - 96.5 });
    drawTextArea(secondPage, 'Staj yeri Eposta', { x: width - 1.85 * 230, y: height / 2 - 121.5 });

    //Staj Yapılan Yer Yetkili Bilgileri
    drawTextArea(secondPage, 'Yetkili ad', { x: width - 1.85 * 130, y: height / 2 + 4 });
    drawTextArea(secondPage, 'Yetkili Title', { x: width - 1.85 * 130, y: height / 2 - 16.5 });
    drawTextArea(secondPage, 'Yetkili Görev alani', { x: width - 1.85 * 130, y: height / 2 - 37 });
    drawTextArea(secondPage, 'Yetkili Telefon', { x: width - 1.85 * 130, y: height / 2 - 57 });
    drawTextArea(secondPage, 'Yetkili Eposta', { x: width - 1.85 * 130, y: height / 2 - 76.5 });

    //İmzalar
    drawTextArea(secondPage, 'date', { x: width - 1.85 * 270, y: height / 2 - 260.5 });

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  }

  useEffect(() => {
    const { file_id, intern_id } = router.query;
    let pdf;

    const data = fetchIntern(intern_id);

    data.then((item) => {
      setIntern(item);
    });

    if (file_id === '0') {
      pdf = basvuru_belgesi();
      pdf.then((data) => {
        const blob = new Blob([new Uint8Array(data)]);
        setPage(blob);
      });
    }
  }, []);

  const signature = () => {
    signatureByStudent();
  };
  return (
    <MainLayout>
      <div style={{ width: '100%' }}>
        <ButtonUI label="İmzala" onClick={signature} />
        <Document className={styles.pageWrapper} file={page} onLoadSuccess={onDocumentLoadSuccess}>
          <Page className={styles.page} height={700} pageNumber={pageNumber}>
            <div style={{ display: 'flex', alignItems: 'center' }} className={styles.pageNumber}>
              <div
                onClick={() => setPageNumber(pageNumber - 1)}
                style={{ padding: 3, borderRight: '1px solid rgba(111, 156, 194, 0.123)' }}
              >
                <LeftOutlined />
              </div>
              <div style={{ padding: 10 }}>
                {pageNumber} of {numPages}
              </div>
              <div
                onClick={() => setPageNumber(pageNumber + 1)}
                style={{ padding: 3, borderLeft: '1px solid rgba(111, 156, 194, 0.123)' }}
              >
                <RightOutlined />
              </div>
            </div>
          </Page>
        </Document>
      </div>
    </MainLayout>
  );
}

export default File;

export async function getServerSideProps() {
  return {
    props: { ...PRIVATE_ROUTE_CONFIG.FILES }
  };
}
