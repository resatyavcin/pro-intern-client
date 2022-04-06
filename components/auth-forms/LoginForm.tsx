import React, { useState } from 'react';
import TypographyUI from '../../components/ui/typography/Typography';
import InputUI from '../../components/ui/form/inputUI';
import ButtonUI from '../../components/ui/button/buttonUI';
import FormUI from '../../components/ui/form/formUI';
import { useAuth } from '../../context/AuthContext';

const LoginForm = () => {
  const { login } = useAuth();

  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const showPasswordField = (e: any) => {
    e.preventDefault();
    setPasswordVisibility(true);
  };
  const hidePasswordField = () => setPasswordVisibility(false);

  const onFinish = (values: any) => {
    login({ ...values });
  };

  const onFinishFailed = (errorInfo: any) => {};

  return (
    <FormUI onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <InputUI
        name="email"
        label="Email"
        placeholder="example@ogrenci.ibu.tr"
        disabled={passwordVisibility}
        suffix={
          passwordVisibility ? <TypographyUI onClick={hidePasswordField} label="CHANGE" typographyType="link" /> : null
        }
      />
      {passwordVisibility ? (
        <InputUI
          style={{ marginBottom: 20 }}
          type="password"
          name="password"
          label="Password"
          placeholder="Enter the password"
        />
      ) : null}
      <ButtonUI
        onClick={passwordVisibility ? undefined : showPasswordField}
        htmlType={passwordVisibility ? 'submit' : 'button'}
        label={passwordVisibility ? 'LOGIN' : 'NAVIGATION.NEXT'}
        block
        type="primary"
      />
    </FormUI>
  );
};
export default LoginForm;
