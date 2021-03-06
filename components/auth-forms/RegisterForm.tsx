import React, { useState } from 'react';

import { Col, Row } from 'antd';
import PasswordStrengthBar from 'react-password-strength-bar';

import { useAuth } from '../../context/AuthContext';

import InputUI from '../../components/ui/form/inputUI';
import ButtonUI from '../../components/ui/button/buttonUI';
import FormUI from '../../components/ui/form/formUI';
import { Select } from 'antd';
import FormItemUI from '../ui/form/formItemUI';

const { Option } = Select;

type feed = '' | 'error' | 'success' | 'warning' | 'validating' | undefined;

interface IFeedBack {
  fieldName: string;
  feedType: feed;
}

const RegisterForm = () => {
  const [feedBack, setFeedBack] = useState<IFeedBack[]>([]);
  const [password, setPassword] = useState<string>('');

  const { signUp } = useAuth();

  const onFinish = (values: any) => {
    signUp({ ...values });
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

  const onValuesChange = (changedValues: any) => {
    setPassword(changedValues.password);
  };

  return (
    <FormUI
      onValuesChange={onValuesChange}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      onFieldsChange={onChangeFields}
    >
      <Row gutter={5}>
        <Col xs={12}>
          <InputUI
            name="firstName"
            label="Ad"
            rules={[
              { required: true, message: 'L??tfen bu alan?? bo?? b??rakmay??n??z.' },
              { min: 2, message: 'En az iki karakterden olu??mal??d??r.' }
            ]}
            feedback={findFeedBackState('firstName')}
          />
        </Col>
        <Col xs={12}>
          <InputUI
            name="lastName"
            label="Soyad"
            rules={[
              { required: true, message: 'L??tfen bu alan?? bo?? b??rakmay??n??z.' },
              { min: 2, message: 'En az iki karakterden olu??mal??d??r.' }
            ]}
            feedback={findFeedBackState('lastName')}
          />
        </Col>
      </Row>

      <Row gutter={5}>
        <Col xs={18}>
          <FormItemUI
            name={'departmentCode'}
            label={'B??l??m'}
            rules={[{ required: true, message: 'L??tfen bu alan?? bo?? b??rakmay??n??z.' }]}
            feedback={'success'}
          >
            <Select defaultValue="CE">
              <Option value="CE">Computer Engineer</Option>
              <Option value="ME">Machine Engineer</Option>
              <Option value="FE">Food Engineer</Option>
              <Option value="EE">Electrical Engineer</Option>
            </Select>
          </FormItemUI>
        </Col>
        <Col xs={6}>
          <InputUI
            name="grade"
            label="S??n??f"
            rules={[
              { required: true, message: 'L??tfen bu alan?? bo?? b??rakmay??n??z.' },
              { pattern: new RegExp('[1-4]'), message: '1-4 aral??????nda s??n??f se??iniz' }
            ]}
            feedback={findFeedBackState('grade')}
          />
        </Col>
      </Row>

      <InputUI
        name="schoolNumber"
        label="Okul Numaras??"
        rules={[{ required: true, message: 'L??tfen bu alan?? bo?? b??rakmay??n??z.' }]}
        feedback={findFeedBackState('schoolNumber')}
      />
      <InputUI
        name="republicOfTurkeyId"
        label="TC"
        rules={[
          { required: true, message: 'L??tfen bu alan?? bo?? b??rakmay??n??z.' },
          { pattern: new RegExp('^.{11,11}$'), message: 'L??tfen do??ru bir kimlik numaras?? giriniz.' }
        ]}
        feedback={findFeedBackState('republicOfTurkeyId')}
      />

      <InputUI
        name="email"
        label="Email"
        placeholder="example@ogrenci.ibu.tr"
        rules={[
          { required: true, message: 'L??tfen bu alan?? bo?? b??rakmay??n??z.' },
          { type: 'email', message: 'L??tfen ge??erli bir email giriniz.' }
        ]}
        feedback={findFeedBackState('email')}
      />
      <InputUI
        type="phone"
        name="phone"
        label="Phone"
        placeholder="+90 (5**) *** ** **"
        rules={[
          { required: true, message: 'L??tfen bu alan?? bo?? b??rakmay??n??z.' },
          {
            pattern: /^(\+?90|0)?5\d{9}$/,
            message: 'L??tfen do??ru telefon format??n?? giriniz.'
          }
        ]}
        feedback={findFeedBackState('phone')}
      />
      <InputUI
        type="password"
        name="password"
        label="Password"
        placeholder="Enter the password"
        rules={[{ required: true, message: 'L??tfen bu alan?? bo?? b??rakmay??n??z.' }]}
        feedback={findFeedBackState('password')}
      />
      <PasswordStrengthBar shortScoreWord={false} scoreWords={[]} style={{ marginBottom: 30 }} password={password} />
      <ButtonUI htmlType="submit" label={'REGISTER'} block type="primary" />
    </FormUI>
  );
};

export default RegisterForm;
