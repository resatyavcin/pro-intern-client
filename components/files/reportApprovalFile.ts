import { PDFDocument, PDFPage, rgb, StandardFonts } from 'pdf-lib';

export async function ReportApprovalFile() {
  const url = '../../public/rapor_onay.pdf';
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
  drawTextArea(secondPage, 'Resat YAVCİN', { x: width - 360, y: height - 168 });
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
