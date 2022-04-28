import { Menu } from 'antd';
import React, { useState } from 'react';
import CardUI from '../components/ui/card/cardUI';
import MainLayout from '../core/MainLayout';
import { PRIVATE_ROUTE_CONFIG } from '../routes/privateRoute';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import SettingsProfileForm from '../components/settings-profile-form/SettingsProfileForm';
import DrawSignature from '../components/draw-signature/DrawSignature';

function Settings() {
  const [activeMenu, setActiveMenu] = useState<string>('personal_info');
  return (
    <MainLayout>
      <CardUI style={{ marginBottom: 15 }} cardType="normal">
        <Menu
          selectedKeys={[activeMenu]}
          onClick={({ key }) => setActiveMenu(key)}
          mode="horizontal"
          defaultSelectedKeys={['personal_info']}
        >
          <Menu.Item key="personal_info" icon={<MailOutlined />}>
            Kişisel Bilgiler
          </Menu.Item>
          <Menu.Item key="account_settings" icon={<SettingOutlined />}>
            Hesap Ayarları
          </Menu.Item>
        </Menu>
      </CardUI>
      {activeMenu === 'personal_info' && (
        <CardUI cardType="normal">
          <SettingsProfileForm />
        </CardUI>
      )}
      {activeMenu === 'account_settings' && (
        <CardUI cardType="normal">
          <DrawSignature />
        </CardUI>
      )}
    </MainLayout>
  );
}

export default Settings;

export async function getServerSideProps() {
  return {
    props: { ...PRIVATE_ROUTE_CONFIG.SETTINGS }
  };
}
