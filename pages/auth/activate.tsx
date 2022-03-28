import React from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';

function activate() {
  const router = useRouter();
  const { activeAccount } = useAuth();

  if (router.query.token !== undefined) {
    const token = router.query.token.toString();
    activeAccount(token);
  }

  return <></>;
}

export default activate;
