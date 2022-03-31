//Next & React Imports
import type { AppProps } from 'next/app';

//Provider
import { LanguageProvider } from '../context/LanguageContext';
import AuthProvider from '../context/AuthContext';
import StudentProvider from '../context/StudentContext';

//Styles
import '../assets/styles/globals.scss';
import 'antd/dist/antd.css';
import ActionPanelToggleProvider from '../context/ActionPanelToggleContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <AuthProvider>
        <ActionPanelToggleProvider>
          <StudentProvider>
            <Component {...pageProps} />
          </StudentProvider>
        </ActionPanelToggleProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default MyApp;
