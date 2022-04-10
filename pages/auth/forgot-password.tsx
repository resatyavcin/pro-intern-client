//react
import React, { useState } from 'react';

import AuthLayout from '../../core/AuthLayout';

//Components import
import CardUI from '../../components/ui/card/cardUI';
import InputUI from '../../components/ui/form/inputUI';
import ButtonUI from '../../components/ui/button/buttonUI';
import FormUI from '../../components/ui/form/formUI';

import { MdLock } from 'react-icons/md';

const ForgotPassword_ = () => {
  return (
    <FormUI>
      <InputUI name="email" label="Email" placeholder="example@ogrenci.ibu.tr" />

      <ButtonUI htmlType="submit" label={'FORGOT_PASSWORD'} block type="primary" />
    </FormUI>
  );
};

function ForgotPassword() {
  return (
    <AuthLayout>
      <CardUI
        cardType="auth"
        icon={MdLock}
        headerTitle={'FORGOT_PASSWORD.HEADER_TITLE'}
        headerLabel={'FORGOT_PASSWORD.HEADER_LABEL'}
      >
        <ForgotPassword_ />
      </CardUI>
    </AuthLayout>
  );
}

export default ForgotPassword;
