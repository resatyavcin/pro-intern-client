import React from 'react';
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
      <TypographyUI level={3} label={'404.TITLE'} typographytype={'title'} />
      <TypographyUI label={'404.SUB_TITLE'} typographytype={'text'} />
    </div>
  );
}

export default ErrorPage;
