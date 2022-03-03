//Next Import
import type { NextPage } from 'next';
import AuthLayout from '../core/AuthLayout';
import { Typography } from 'antd';
import { Divider } from 'antd';
const { Title, Text } = Typography;

import { SubmitHandler, useForm } from 'react-hook-form';

//Components import
import CardUI from '../components/ui/card/cardUI';
import InputUI from '../components/ui/form/inputUI';
import ButtonUI from '../components/ui/button/buttonUI';
import SelectUI from '../components/ui/form/selectUI';
import FormUI from '../components/ui/form/formUI';
import TabPaneUI from '../components/ui/tab/tabPaneUI';
import TabUI from '../components/ui/tab/tabUI';

const adminRegisterForm = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit: SubmitHandler = (data) => console.log(data);
  return (
    <FormUI handleSubmit={handleSubmit(onSubmit)}>
      <InputUI
        rules={[{ required: true, message: 'E-mailinizi düzgün şekilde giriniz.' }]}
        control={control}
        name="email"
        label="Email"
        placeholder="Email"
        addonAfter="@ibu.edu.tr"
      />
      <InputUI control={control} name="phone" label="Phone" placeholder="Phone" />
      <InputUI control={control} type="password" name="password" label="Password" placeholder="Password" />
      <ButtonUI htmlType="submit" label={'REGISTER'} block type="primary" />
    </FormUI>
  );
};

const studentRegisterForm = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit: SubmitHandler = (data) => console.log(data);
  return (
    <FormUI handleSubmit={handleSubmit(onSubmit)}>
      <SelectUI name="department" label="Bölüm Seçimi" placeholder="Bölüm Seçimi" optionTitle="Mühendislik Fakültesi" />
      <InputUI control={control} name="tc" label="TC" placeholder="TC" />
      <InputUI control={control} name="email" label="Email" placeholder="Email" addonAfter="@ogrenci.ibu.edu.tr" />
      <InputUI control={control} name="phone" label="Phone" placeholder="Phone" />
      <InputUI control={control} type="password" name="password" label="Password" placeholder="Password" />

      <ButtonUI label={'REGISTER'} block type="primary" />
    </FormUI>
  );
};

const Home: NextPage = () => {
  return (
    <AuthLayout>
      <CardUI>
        <Title level={4}>Kaydolun ve Staj Yönetimine Başlayın!</Title>
        <Text>Yönetici yada öğrenci olarak kaydolun ve sonrasında kimlik doğrulamasına geçin.</Text>
        <Divider />

        <TabUI defaultActiveKey="1" type="card">
          <TabPaneUI tab="Yönetici" key="admin">
            {adminRegisterForm()}
          </TabPaneUI>
          <TabPaneUI tab="Öğrenci" key="student">
            {studentRegisterForm()}
          </TabPaneUI>
        </TabUI>
      </CardUI>
    </AuthLayout>
  );
};

export default Home;
