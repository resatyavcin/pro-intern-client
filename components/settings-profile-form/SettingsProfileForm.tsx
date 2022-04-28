import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import DraggerUI from '../dragger/Dragger';
import ButtonUI from '../ui/button/buttonUI';
import FormUI from '../ui/form/formUI';
import InputUI from '../ui/form/inputUI';
import { useAuth } from '../../context/AuthContext';
import { Student } from '../../common/models/User/Student';

type feed = '' | 'error' | 'success' | 'warning' | 'validating' | undefined;

interface IFeedBack {
  fieldName: string;
  feedType: feed;
}

function SettingsProfileForm() {
  const [feedBack, setFeedBack] = useState<IFeedBack[]>([]);
  const [password, setPassword] = useState<string>('');
  const [response, setError] = useState('');
  const [profile, setProfile] = useState<Student>();

  const { getProfile } = useAuth();

  useEffect(() => {
    const a = getProfile();
    a.then((data) => {
      if (data) {
        setProfile(data);
      }
    });
    console.log(profile);
  }, []);

  const onFinish = (values: any) => {};

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
      initialValues={{
        firstName: profile?.firstName
      }}
    >
      <Row gutter={5}>
        <Col xs={12}>
          <InputUI
            name="firstName"
            label="Ad"
            rules={[{ required: true, message: 'Lütfen bu alanı boş bırakmayınız.' }]}
            feedback={findFeedBackState('firstName')}
          />
        </Col>
        <Col xs={12}>
          <InputUI
            name="lastName"
            label="Soyad"
            rules={[{ required: true, message: 'Lütfen bu alanı boş bırakmayınız.' }]}
            feedback={findFeedBackState('lastName')}
          />
        </Col>
      </Row>

      <Row gutter={5}>
        <Col xs={18}>
          <InputUI
            name="departmentCode"
            label="Bölüm"
            rules={[{ required: true, message: 'Lütfen bu alanı boş bırakmayınız.' }]}
            feedback={findFeedBackState('departmentCode')}
          />
        </Col>
        <Col xs={6}>
          <InputUI
            name="grade"
            label="Sınıf"
            rules={[{ required: true, message: 'Lütfen bu alanı boş bırakmayınız.' }]}
            feedback={findFeedBackState('grade')}
          />
        </Col>
      </Row>

      <InputUI
        name="schoolNumber"
        label="Okul Numarası"
        rules={[{ required: true, message: 'Lütfen bu alanı boş bırakmayınız.' }]}
        feedback={findFeedBackState('schoolNumber')}
      />
      <InputUI
        name="republicOfTurkeyId"
        label="TC"
        rules={[{ required: true, message: 'Lütfen bu alanı boş bırakmayınız.' }]}
        feedback={findFeedBackState('republicOfTurkeyId')}
      />

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

      <ButtonUI htmlType="submit" label={'UPDATE'} block type="primary" />
    </FormUI>
  );
}

export default SettingsProfileForm;
