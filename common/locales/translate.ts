import { translationEN } from './en/translation';
import { translationTR } from './tr/translation';

export type languages = 'TR' | 'EN';

export const allLanguages: languages[]  = ['TR', 'EN'];

export const resourceLanguage = {
  translationEN,
  translationTR
}

export const init = (label: languages) => {
  switch (label) {
    case 'TR':
      return resourceLanguage.translationTR;
    case 'EN':
      return resourceLanguage.translationEN;
  }
};