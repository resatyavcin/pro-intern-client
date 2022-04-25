import { Menu } from 'antd';
import React from 'react';
import CardUI from '../components/ui/card/cardUI';
import MainLayout from '../core/MainLayout';
import { PRIVATE_ROUTE_CONFIG } from '../routes/privateRoute';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import InternInfoForm from '../components/intern-info-forms/InternInfoForm';

function Settings() {
  return (
    <MainLayout>
      <CardUI style={{ marginBottom: 15 }} cardType="normal">
        <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
          <Menu.Item key="mail" icon={<MailOutlined />}>
            Kişisel Bilgiler
          </Menu.Item>
          <Menu.Item key="mail2" icon={<SettingOutlined />}>
            Hesap Ayarları
          </Menu.Item>
        </Menu>
      </CardUI>
      <CardUI cardType="normal">
        <InternInfoForm />
      </CardUI>
    </MainLayout>
  );
}

export default Settings;

export async function getServerSideProps() {
  return {
    props: { ...PRIVATE_ROUTE_CONFIG.SETTINGS }
  };
}
