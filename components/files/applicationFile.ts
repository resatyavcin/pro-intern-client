import { PDFDocument, PDFPage, rgb, StandardFonts } from 'pdf-lib';

export async function ApplicationFile(signatures: { userRole: string; signature: string }[]) {
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

  const { width, height } = secondPage.getSize();

  if (signatures && signatures !== undefined && signatures.length > 0) {
    console.log(signatures);
    const signatureByte = await fetch(signatures[0].signature).then((res) => res.arrayBuffer());
    const signatureImage = await pdfDoc.embedPng(signatureByte);

    secondPage.drawImage(signatureImage, { width: 80, height: 50, opacity: 1, x: 100, y: 100 });
  }

  drawTextArea(secondPage, '181906114', { x: width - 1.85 * 230, y: height / 2 + 308 });
  drawTextArea(secondPage, 'Bilgisayar Mühendisligi', { x: width - 1.85 * 230, y: height / 2 + 287.5 });
  drawTextArea(secondPage, '4', { x: width - 1.85 * 230, y: height / 2 + 267.5 });

  drawTextArea(secondPage, '22-09-2020', { x: width - 1.85 * 230, y: height / 2 + 208.5 });
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
