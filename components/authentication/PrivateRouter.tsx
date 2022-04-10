import React, { Fragment, useEffect, useState } from 'react';
import { IPRIVATE_CONFIG } from '../../common/constants/routes-config/routesConfig';
import ErrorPage from '../../pages/404';

interface IPrivateRouter {
  pageProps: IPRIVATE_CONFIG;
  children: React.ReactElement;
}

function PrivateRouter(props: IPrivateRouter) {
  const { children, pageProps } = props;

  const [loginUser, setLoginUser] = useState({ role: '' });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      if (user !== null && user !== undefined) {
        setLoginUser(JSON.parse(user));
      }
    }
  }, []);

  if (pageProps.hasProfile.includes(loginUser.role)) {
    return <Fragment>{children}</Fragment>;
  }
  return (
    <Fragment>
      <ErrorPage />
    </Fragment>
  );
}

export default PrivateRouter;
