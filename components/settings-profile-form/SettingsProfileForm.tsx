import { Col, Row } from 'antd';
import React, { useState } from 'react';
import ButtonUI from '../ui/button/buttonUI';
import FormUI from '../ui/form/formUI';
import InputUI from '../ui/form/inputUI';
import { Student } from '../../common/models/User/Student';

type feed = '' | 'error' | 'success' | 'warning' | 'validating' | undefined;

interface IFeedBack {
  fieldName: string;
  feedType: feed;
}

function SettingsProfileForm() {
  const [feedBack, setFeedBack] = useState<IFeedBack[]>([]);
  const [profile] = useState<Student>();

  const onFinish = () => {};

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

  const onValuesChange = () => {};

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
            rules={[{ required: true, message: 'L??tfen bu alan?? bo?? b??rakmay??n??z.' }]}
            feedback={findFeedBackState('firstName')}
          />
        </Col>
        <Col xs={12}>
          <InputUI
            name="lastName"
            label="Soyad"
            rules={[{ required: true, message: 'L??tfen bu alan?? bo?? b??rakmay??n??z.' }]}
            feedback={findFeedBackState('lastName')}
          />
        </Col>
      </Row>

      <Row gutter={5}>
        <Col xs={18}>
          <InputUI
            name="departmentCode"
            label="B??l??m"
            rules={[{ required: true, message: 'L??tfen bu alan?? bo?? b??rakmay??n??z.' }]}
            feedback={findFeedBackState('departmentCode')}
          />
        </Col>
        <Col xs={6}>
          <InputUI
            name="grade"
            label="S??n??f"
            rules={[{ required: true, message: 'L??tfen bu alan?? bo?? b??rakmay??n??z.' }]}
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
        rules={[{ required: true, message: 'L??tfen bu alan?? bo?? b??rakmay??n??z.' }]}
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

      <ButtonUI htmlType="submit" label={'BUTTON_LABEL.UPDATE'} block type="primary" />
    </FormUI>
  );
}

export default SettingsProfileForm;
