//Import React
import { useState, createContext } from 'react';

//Import Provider
import { IntlProvider } from 'react-intl';
import { init, languages } from '../common/locales/translate';

export const LanguageContext = createContext();

export const LanguageProvider = (props: any) => {
  const { children } = props;

  const [switchLang, setSwitchLang] = useState<languages>('TR');

  const values = {
    switchLang,
    setSwitchLang
  };

  return (
    <LanguageContext.Provider value={values}>
      <IntlProvider messages={init(switchLang)} locale={switchLang} defaultLocale={switchLang}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};
