//Next Import
import type { NextPage } from 'next';
import AuthLayout from '../core/AuthLayout';
import { Form, Typography } from 'antd';
import { Divider } from 'antd';
const { Title, Text } = Typography;
import { Tabs } from 'antd';

const { TabPane } = Tabs;

//Components import
import CardUI from '../components/ui/card/cardUI';
import InputUI from '../components/ui/form/inputUI';
import ButtonUI from '../components/ui/button/buttonUI';
import SelectUI from '../components/ui/form/selectUI';

const Home: NextPage = () => {
  const [form] = Form.useForm();

  return (
    <AuthLayout>
      <CardUI>
        <Title level={4}>Kaydolun ve Staj Yönetimine Başlayın!</Title>
        <Text>Yönetici yada öğrenci olarak kaydolun ve sonrasında kimlik doğrulamasına geçin.</Text>
        <Divider />

        <Tabs defaultActiveKey="1" type="card">
          <TabPane tab="Yönetici" key="1">
            {' '}
            <Form layout="vertical">
              <InputUI name="email" label="Email" placeholder="Email" addonAfter="@ibu.edu.tr" />
              <InputUI name="phone" label="Phone" placeholder="Phone" />
              <InputUI type="password" name="password" label="Password" placeholder="Password" />

              <ButtonUI label={'REGISTER'} block type="primary" />
            </Form>
          </TabPane>

          <TabPane tab="Öğrenci" key="2">
            <Form layout="vertical">
              <SelectUI
                name="department"
                label="Bölüm Seçimi"
                placeholder="Bölüm Seçimi"
                optionTitle="Mühendislik Fakültesi"
              />
              <InputUI name="email" label="Email" placeholder="Email" addonAfter="@ogrenci.ibu.edu.tr" />
              <InputUI name="phone" label="Phone" placeholder="Phone" />
              <InputUI type="password" name="password" label="Password" placeholder="Password" />

              <ButtonUI label={'REGISTER'} block type="primary" />
            </Form>
          </TabPane>
        </Tabs>
      </CardUI>
    </AuthLayout>
  );
};

export default Home;
