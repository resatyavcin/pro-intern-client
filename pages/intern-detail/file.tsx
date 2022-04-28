//react & next
import React, { useEffect, useState } from 'react';

//layout
import MainLayout from '../../core/MainLayout';

//styles
import styles from '../../assets/styles/PdfFile.module.scss';

//utils
import { Document, Page, pdfjs } from 'react-pdf';
import { degrees, PDFDocument, PDFPage, rgb, StandardFonts } from 'pdf-lib';
import { PRIVATE_ROUTE_CONFIG } from '../../routes/privateRoute';
import { useRouter } from 'next/router';
import { useIntern } from '../../context/InternContext';
import { Intern } from '../../common/models/Intern/Intern';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function File() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(2);
  const [intern, setIntern] = useState<Intern>();
  const [page, setPage] = useState<Blob>();
  const router = useRouter();

  const { fetchIntern } = useIntern();

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

    const drawTextArea = (page: PDFPage, value: string, coord: { x: number; y: number }, divide?: number) => {
      if (divide && intern !== undefined) {
        value = value.slice(0, divide) + '\n' + value.slice(divide);
      }
      if (intern !== undefined) {
        page.drawText(value, {
          x: coord.x,
          y: coord.y,
          size: 11,
          font: helveticaFont,
          color: rgb(0, 0, 0)
        });
      }
    };

    const secondPage = pages[1];

    // !warning -Global Size-
    const { width, height } = secondPage.getSize();

    if (intern !== undefined && typeof intern.companyName === string) {
      drawTextArea(secondPage, intern.companyName, { x: width - 1.85 * 100, y: height / 2 + 40 });
    }

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  }

  useEffect(() => {
    const { file_id, intern_id } = router.query;
    let pdf;

    const data = fetchIntern(intern_id);
    setIntern(data);

    if (file_id === '0') {
      pdf = basvuru_belgesi();
      pdf.then((data) => {
        const blob = new Blob([new Uint8Array(data)]);
        setPage(blob);
      });
    }
  }, []);

  return (
    <MainLayout>
      <div style={{ width: '100%' }}>
        <Document className={styles.pageWrapper} file={page} onLoadSuccess={onDocumentLoadSuccess}>
          <Page className={styles.page} height={700} pageNumber={pageNumber}>
            <div className={styles.pageNumber}>
              {pageNumber} of {numPages}
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
