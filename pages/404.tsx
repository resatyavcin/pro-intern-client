import React from 'react';
import ButtonUI from '../components/ui/button/buttonUI';
import TypographyUI from '../components/ui/typography/Typography';

function ErrorPage() {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        width={300}
        height={300}
        src="https://assets.dropbox.com/www/en-us/illustrations/spot/look-magnifying-glass.svg"
        alt="error"
      />
      <TypographyUI level={3} label={'Aradığınız sayfa bulunamamıştır.'} typographyType={'title'} />
      <TypographyUI label={"Lütfen girilen URL'i tekrardan kontrol ediniz."} typographyType={'text'} />
      <ButtonUI type="primary" label="Ana Sayfaya Dön" style={{ marginTop: 30 }} />
    </div>
  );
}

export default ErrorPage;
