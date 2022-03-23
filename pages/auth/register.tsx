import React from 'react';
import { useState } from 'react';
import AuthLayout from '../../core/AuthLayout';

//Components import
import CardUI from '../../components/ui/card/cardUI';
import InputUI from '../../components/ui/form/inputUI';
import ButtonUI from '../../components/ui/button/buttonUI';
import FormUI from '../../components/ui/form/formUI';
import { FaUserCircle } from 'react-icons/fa';

import { message } from 'antd';
import PasswordStrengthBar from 'react-password-strength-bar';

type feed = '' | 'error' | 'success' | 'warning' | 'validating' | undefined;

interface IFeedBack {
  fieldName: string;
  feedType: feed;
}

const RegisterForm = () => {
  const [feedBack, setFeedBack] = useState<IFeedBack[]>([]);
  const [password, setPassword] = useState<string>('');

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const findFeedBackState = (fieldName: string) =>
    feedBack.find((element: IFeedBack) => element.fieldName === fieldName);

  const findIndexFeedBackState = (fieldName: string) =>
    feedBack.findIndex((element: IFeedBack) => element.fieldName === fieldName);

  const isExist = (fieldName: string) => {
    const isExist = findFeedBackState(fieldName);

    if (!isExist || undefined) {
      return false;
    } else {
      return true;
    }
  };

  const findFeedBackAndUpdate = (fieldName: string, status: feed) => {
    let newArr = [...feedBack];

    newArr[findIndexFeedBackState(fieldName)].feedType = status;
    setFeedBack(newArr);
  };

  const onChangeFields = (changedFields: any) => {
    const field = changedFields[0];

    if (changedFields[0]?.errors?.length > 0) {
      if (isExist(field.name[0])) {
        findFeedBackAndUpdate(field.name[0], 'error');
      } else {
        setFeedBack([...feedBack, { fieldName: field.name[0], feedType: 'error' }]);
      }
    } else {
      if (isExist(field.name[0])) {
        findFeedBackAndUpdate(field.name[0], 'success');
      } else {
        setFeedBack([...feedBack, { fieldName: field.name[0], feedType: 'success' }]);
      }
    }
  };

  const onValuesChange = (changedValues: any, allValues: any) => {
    setPassword(changedValues.password);
  };

  return (
    <FormUI
      onValuesChange={onValuesChange}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onFieldsChange={onChangeFields}
    >
      <InputUI
        name="email"
        label="Email"
        placeholder="example@ogrenci.ibu.tr"
        rules={[
          { required: true, message: 'Lütfen bu alanı boş bırakmayınız.' },
          { type: 'email', message: 'Lütfen geçerli bir email giriniz.' }
        ]}
        feedback={findFeedBackState('email')}
      />
      <InputUI
        type="phone"
        name="phone"
        label="Phone"
        placeholder="+90 (5**) *** ** **"
        rules={[
          { required: true, message: 'Lütfen bu alanı boş bırakmayınız.' },
          {
            pattern: /^(\+?90|0)?5\d{9}$/,
            message: 'Lütfen doğru telefon formatını giriniz.'
          }
        ]}
        feedback={findFeedBackState('phone')}
      />
      <InputUI
        type="password"
        name="password"
        label="Password"
        placeholder="Enter the password"
        rules={[{ required: true, message: 'Lütfen bu alanı boş bırakmayınız.' }]}
        feedback={findFeedBackState('password')}
      />
      <PasswordStrengthBar
        shortScoreWord={'çok kısa'}
        scoreWords={['çok kısa', 'biraz kötü', 'eh işte!', 'iyi', 'işte bu!!']}
        style={{ marginBottom: 30 }}
        password={password}
      />
      <ButtonUI
        htmlType="submit"
        label={'REGISTER'}
        onClick={() => message.error('Sunucudan kaynaklı bir sebepten kaydınız tamamlanamamıştır.')}
        block
        type="primary"
      />
    </FormUI>
  );
};

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
