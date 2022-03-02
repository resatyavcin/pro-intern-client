//Import Provider
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import { init } from '../common/locales/translate.config';

export const LanguageContext = createContext();

export const LanguageProvider = (props: any) => {
  const { children } = props;

  const { locale } = useRouter();

  return (
    <IntlProvider messages={init()} locale={locale === undefined ? 'tr' : locale} defaultLocale={locale}>
      {children}
    </IntlProvider>
  );
};
