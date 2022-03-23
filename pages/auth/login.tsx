//react
import React, { useState } from 'react';

import AuthLayout from '../../core/AuthLayout';

//Components import
import CardUI from '../../components/ui/card/cardUI';
import InputUI from '../../components/ui/form/inputUI';
import ButtonUI from '../../components/ui/button/buttonUI';
import FormUI from '../../components/ui/form/formUI';

import { FaFingerprint } from 'react-icons/fa';
import TypographyUI from '../../components/ui/typography/Typography';

const Login = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const showPasswordField = () => setPasswordVisibility(true);

  const hidePasswordField = () => setPasswordVisibility(false);

  return (
    <FormUI>
      <InputUI
        name="email"
        label="Email"
        placeholder="example@ogrenci.ibu.tr"
        disabled={passwordVisibility}
        suffix={
          passwordVisibility ? (
            <TypographyUI onClick={hidePasswordField} label={'Change'} typographyType={'link'} />
          ) : null
        }
      />

      {passwordVisibility ? (
        <InputUI type="password" name="password" label="Password" placeholder="Enter the password" />
      ) : null}
      <ButtonUI
        onClick={passwordVisibility ? () => console.log('submit') : showPasswordField}
        htmlType="submit"
        label={passwordVisibility ? 'LOGIN' : 'NAVIGATION.NEXT'}
        block
        type="primary"
      />
    </FormUI>
  );
};

function login() {
  return (
    <AuthLayout>
      <CardUI
        icon={FaFingerprint}
        headerTitle={'LOGIN.HEADER_TITLE'}
        headerLabel={'LOGIN.HEADER_LABEL'}
        footerLabel={'LOGIN.FOOTER_LABEL'}
        footerLink={'LOGIN.FOOTER_LINK'}
      >
        <Login />
      </CardUI>
    </AuthLayout>
  );
}

export default login;
