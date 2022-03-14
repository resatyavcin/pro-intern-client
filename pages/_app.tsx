//Next & React Imports
import type { AppProps } from 'next/app';

//Provider
import { LanguageProvider } from '../context/LanguageContext';
import { StudentProvider } from '../context/StudentContext';

//Styles
import '../assets/styles/globals.scss';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <StudentProvider>
        <Component {...pageProps} />
      </StudentProvider>
    </LanguageProvider>
  );
}

export default MyApp;
