import translationEN from './en/translation.json';
import translationTR from './tr/translation.json';
import { useRouter } from 'next/router';

export type languages = 'tr' | 'en';

export const resourceLanguage = {
  translationEN,
  translationTR
};

export const init = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { locale } = useRouter();

  switch (locale) {
    case 'tr':
      return resourceLanguage.translationTR;
    case 'en':
      return resourceLanguage.translationEN;
  }
};
