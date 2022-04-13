//Next & React Imports
import type { AppProps } from 'next/app';

//Provider
import PrivateRouter from '../components/authentication/PrivateRouter';
import { LanguageProvider } from '../context/LanguageContext';
import AuthProvider, { useAuth } from '../context/AuthContext';
import StudentProvider from '../context/StudentContext';

//Styles
import '../assets/styles/globals.scss';
import 'antd/dist/antd.css';
import ActionPanelToggleProvider from '../context/ActionPanelToggleContext';
import InternProvider from '../context/InternContext';

function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps?.isPrivate) {
    return (
      <LanguageProvider>
        <AuthProvider>
          <PrivateRouter pageProps={pageProps}>
            <ActionPanelToggleProvider>
              <StudentProvider>
                <InternProvider>
                  <Component {...pageProps} />
                </InternProvider>
              </StudentProvider>
            </ActionPanelToggleProvider>
          </PrivateRouter>
        </AuthProvider>
      </LanguageProvider>
    );
  } else {
    return (
      <LanguageProvider>
        <AuthProvider>
          <ActionPanelToggleProvider>
            <StudentProvider>
              <InternProvider>
                <Component {...pageProps} />
              </InternProvider>
            </StudentProvider>
          </ActionPanelToggleProvider>
        </AuthProvider>
      </LanguageProvider>
    );
  }
}

export default MyApp;
