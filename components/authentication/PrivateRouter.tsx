import React, { Fragment, useEffect, useState } from 'react';
import { IPRIVATE_CONFIG } from '../../common/constants/routes-config/routesConfig';
import { useAuth } from '../../context/AuthContext';
import ErrorPage from '../../pages/404';
import { User } from '../../common/models/User/LoginUser';
interface IPrivateRouter {
  pageProps: IPRIVATE_CONFIG;
  children: React.ReactElement;
}

function PrivateRouter(props: IPrivateRouter) {
  const { children, pageProps } = props;

  const [login, setLogin] = useState<User>({ _id: '', email: '', firstName: '', lastName: '', role: '' });
  const [token, setToken] = useState<string | null>('');

  const { setLoginUser } = useAuth();

  useEffect(() => {
    if (typeof window !== undefined) {
      const user = localStorage.getItem('user');
      const token = localStorage.getItem('token');
      if (user) {
        setLogin(JSON.parse(user));
        setLoginUser(JSON.parse(user));
        setToken(token);
      }
    }
  }, []);

  if (pageProps.hasProfile.includes(login?.role) && login && token) {
    return <Fragment>{children}</Fragment>;
  }
  return (
    <Fragment>
      <ErrorPage />
    </Fragment>
  );
}

export default PrivateRouter;
