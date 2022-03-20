//Next Import
import type { NextPage } from 'next';
import AuthLayout from '../core/AuthLayout';
import { Typography } from 'antd';
import { Divider } from 'antd';
const { Title, Text } = Typography;

//Components import
import CardUI from '../components/ui/card/cardUI';
import InputUI from '../components/ui/form/inputUI';
import ButtonUI from '../components/ui/button/buttonUI';
import FormUI from '../components/ui/form/formUI';
import TabPaneUI from '../components/ui/tab/tabPaneUI';
import TabUI from '../components/ui/tab/tabUI';

import { message } from 'antd';

const adminRegisterForm = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <FormUI onFinish={onFinish} onFinishFailed={onFinishFailed}>
      <InputUI
        name="email"
        label="Email"
        placeholder="example@ogrenci.ibu.tr"
        rules={[{ required: true, message: 'Please enter' }]}
        feedback={'success'}
      />
      <InputUI type="phone" name="phone" label="Phone" placeholder="+90 (5**) *** ** **" />
      <InputUI type="password" name="password" label="Password" placeholder="Enter the password" />
      <ButtonUI
        htmlType="submit"
        label={'REGISTER'}
        onClick={() => message.success('Kaydınız Başarılı Bir şekilde olmuştur')}
        block
        type="primary"
      />
    </FormUI>
  );
};

const studentRegisterForm = () => {
  // const { control, handleSubmit } = useForm();

  // const onSubmit: SubmitHandler = (data) => console.log(data);
  return (
    <div></div>
    // <FormUI handleSubmit={handleSubmit(onSubmit)}>
    //   <SelectUI name="department" label="Bölüm Seçimi" placeholder="Bölüm Seçimi" optionTitle="Mühendislik Fakültesi" />
    //   {/* <InputUI control={control} name="tc" label="TC" placeholder="TC" />
    //   <InputUI control={control} name="email" label="Email" placeholder="Email" addonAfter="@ogrenci.ibu.edu.tr" />
    //   <InputUI control={control} name="phone" label="Phone" placeholder="Phone" />
    //   <InputUI control={control} type="password" name="password" label="Password" placeholder="Password" /> */}

    //   <ButtonUI label={'REGISTER'} block type="primary" />
    // </FormUI>
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
        <Divider />
        <Text>Yönetici yada öğrenci olarak kaydolun ve sonrasında kimlik doğrulamasına geçin.</Text>
      </CardUI>
    </AuthLayout>
  );
};

export default Home;
