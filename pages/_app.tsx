//Next & React Imports
import type { AppProps } from 'next/app';

//Provider
import { LanguageProvider } from '../context/LanguageContext';

//Styles
import '../assets/styles/globals.scss';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
