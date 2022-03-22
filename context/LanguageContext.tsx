//import Next & React
import { useRouter } from 'next/router';

//Import Provider
import { IntlProvider } from 'react-intl';

//import Config
import { init } from '../common/locales/translate.config';

export const LanguageProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const { locale } = useRouter();

  return (
    <IntlProvider messages={init()} locale={locale === undefined ? 'tr' : locale} defaultLocale={locale}>
      {children}
    </IntlProvider>
  );
};
