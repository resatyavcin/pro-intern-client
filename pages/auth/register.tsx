//import React
import React from 'react';

//import Layout
import AuthLayout from '../../core/AuthLayout';

//import Components
import CardUI from '../../components/ui/card/cardUI';
import RegisterForm from '../../components/auth-forms/RegisterForm';

//import React Icons
import { FaUserCircle } from 'react-icons/fa';

const register = () => {
  return (
    <AuthLayout>
      <CardUI
        icon={FaUserCircle}
        headerTitle={'REGISTER.HEADER_TITLE'}
        headerLabel={'REGISTER.HEADER_LABEL'}
        footerLabel={'REGISTER.FOOTER_LABEL'}
        footerLink={'REGISTER.FOOTER_LINK'}
      >
        <RegisterForm />
      </CardUI>
    </AuthLayout>
  );
};

export default register;
