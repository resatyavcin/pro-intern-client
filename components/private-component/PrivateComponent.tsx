import React, { Fragment } from 'react';
import { useAuth } from '../../context/AuthContext';

type roles = 'ADMIN' | 'STUDENT';

interface IPrivateComponent {
  userRole: roles;
  children: React.ReactChild;
}
function PrivateComponent(props: IPrivateComponent) {
  const { userRole, children } = props;

  const { user } = useAuth();

  return <Fragment>{user && user.role === userRole && children}</Fragment>;
}

export default PrivateComponent;
