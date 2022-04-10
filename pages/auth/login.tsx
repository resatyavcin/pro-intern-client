//react
import React from 'react';

import AuthLayout from '../../core/AuthLayout';

//Components import
import CardUI from '../../components/ui/card/cardUI';

import { FaFingerprint } from 'react-icons/fa';
import LoginForm from '../../components/auth-forms/LoginForm';

function login() {
  return (
    <AuthLayout>
      <CardUI
        cardType="auth"
        icon={FaFingerprint}
        headerTitle={'LOGIN.HEADER_TITLE'}
        headerLabel={'LOGIN.HEADER_LABEL'}
        footerLabel={'LOGIN.FOOTER_LABEL'}
        footerLink={'LOGIN.FOOTER_LINK'}
      >
        <LoginForm />
      </CardUI>
    </AuthLayout>
  );
}

export default login;
