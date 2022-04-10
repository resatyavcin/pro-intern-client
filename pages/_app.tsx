//Next & React Imports
import type { AppProps } from 'next/app';

//Provider
import PrivateRouter from '../components/authentication/PrivateRouter';
import { LanguageProvider } from '../context/LanguageContext';
import AuthProvider from '../context/AuthContext';
import StudentProvider from '../context/StudentContext';

//Styles
import '../assets/styles/globals.scss';
import 'antd/dist/antd.css';
import ActionPanelToggleProvider from '../context/ActionPanelToggleContext';

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps?.isPrivate) {
    return (
      <LanguageProvider>
        <PrivateRouter pageProps={pageProps}>
          <AuthProvider>
            <ActionPanelToggleProvider>
              <StudentProvider>
                <Component {...pageProps} />
              </StudentProvider>
            </ActionPanelToggleProvider>
          </AuthProvider>
        </PrivateRouter>
      </LanguageProvider>
    );
  } else {
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
}

export default MyApp;
