//import React
import React, { Fragment, useEffect } from 'react';
import { useRouter } from 'next/router';

//import Styles
import styles from '../assets/styles/Sidebar.module.scss';
import stylesToggle from '../assets/styles/Toggle.module.scss';

//import Components
import SidebarUI from '../components/sidebar/sidebar';
import HeaderUI from '../components/header/Header';
import CollapseUI from '../components/ui/collapse/Collapse';
import Activities from '../components/short/activities';
import Resume from '../components/short/resume';

import { Avatar, Layout } from 'antd';
const Content = Layout;

import { PRIVATE_ROUTE_CONFIG } from '../routes/privateRoute';

import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import {
  InfoCircleOutlined,
  FieldTimeOutlined,
  DeleteOutlined,
  HomeOutlined,
  FolderOutlined,
  FileDoneOutlined,
  FileExclamationOutlined,
  UserOutlined,
  ThunderboltOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { CgPushChevronRight, CgPushChevronLeft } from 'react-icons/cg';

//import Contexts
import { useCollapse } from '../context/ActionPanelToggleContext';
import { useStudent } from '../context/StudentContext';
import { useAuth } from '../context/AuthContext';

const MainLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const { collapsed, setCollapsed } = useCollapse();

  const { selectedStudent, selectStudent } = useStudent();
  const { user } = useAuth();

  const router = useRouter();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <HeaderUI />
      <Layout className={styles.siteLayout}>
        {user && user.role === 'ADMIN' && (
          <SidebarUI style={{ height: 'calc(100vh-58px)' }}>
            <Menu
              style={{ minHeight: '93vh' }}
              selectedKeys={[router.asPath]}
              defaultSelectedKeys={['dashboard']}
              defaultOpenKeys={
                router.asPath === '/documents?verify=true' || router.asPath === '/documents?verify=false'
                  ? ['sub1']
                  : []
              }
              mode="inline" // inlineCollapsed={this.state.collapsed}
              onClick={({ key }) => {
                selectStudent([]);
                router.push(`${key}`);
              }}
            >
              <Menu.Item key="/dashboard" icon={<HomeOutlined />}>
                Ana Sayfa
              </Menu.Item>
              <SubMenu key="sub1" icon={<FolderOutlined />} title="Belgeler">
                <Menu.Item key="/documents?verify=true" icon={<FileDoneOutlined />}>
                  Onaylı
                </Menu.Item>
                <Menu.Item key="/documents?verify=false" icon={<FileExclamationOutlined />}>
                  Onaylanmamış
                </Menu.Item>
              </SubMenu>
              <Menu.Item key="/students" icon={<UserOutlined />}>
                Öğrenciler
              </Menu.Item>
              <Menu.Item key="/trash" icon={<DeleteOutlined />}>
                Çöp Kutusu
              </Menu.Item>
            </Menu>
          </SidebarUI>
        )}

        {user && user.role === 'STUDENT' && (
          <SidebarUI style={{ height: 'calc(100vh-58px)' }}>
            <Menu
              style={{ minHeight: '93vh' }}
              selectedKeys={[router.asPath]}
              defaultSelectedKeys={['dashboard']}
              defaultOpenKeys={
                router.asPath === '/documents?verify=true' || router.asPath === '/documents?verify=false'
                  ? ['sub1']
                  : []
              }
              mode="inline" // inlineCollapsed={this.state.collapsed}
              onClick={({ key }) => {
                selectStudent([]);
                router.push(`${key}`);
              }}
            >
              <Menu.Item key="/" icon={<HomeOutlined />}>
                Ana Sayfa
              </Menu.Item>
              <Menu.Item key={'/interns'} icon={<ThunderboltOutlined />}>
                Stajlar
              </Menu.Item>
              <Menu.Item key={'/settings'} icon={<SettingOutlined />}>
                Ayarlar
              </Menu.Item>
            </Menu>
          </SidebarUI>
        )}

        <Content
          style={{
            minHeight: 'calc(100vh-58px)',
            padding: 30
          }}
          className={styles.siteLayoutBackground}
        >
          {children}
        </Content>
        {selectedStudent && selectedStudent.length > 0 && user && user.role === 'ADMIN' && (
          <SidebarUI
            collapsedWidth={330}
            width={56}
            style={{ height: 'calc(100vh-58px)', background: '#ffffff', borderLeft: '1px solid #d5d5d5' }}
            collapsed={collapsed}
          >
            <div className={stylesToggle.wrapperToggle}>
              <div className={collapsed ? stylesToggle.contentToggleRow : stylesToggle.toggleRowContentDisplay}>
                {collapsed && selectedStudent ? (
                  <Fragment>
                    <Avatar.Group maxCount={2} maxStyle={{ background: '#7e3901' }}>
                      {selectedStudent?.map((user) => (
                        <Avatar style={{ backgroundColor: '#c25c09' }}>{user.firstName[0]}</Avatar>
                      ))}
                    </Avatar.Group>
                    <div style={{ marginLeft: 10, fontWeight: 'bold' }}>SEÇİLDİ</div>
                  </Fragment>
                ) : (
                  <div style={{ fontWeight: 'bold' }}>PRO INTERN</div>
                )}
              </div>
              {React.createElement(collapsed ? CgPushChevronLeft : CgPushChevronRight, {
                onClick: toggle,
                className: stylesToggle.baseToggle
              })}
            </div>

            <CollapseUI collapsed={collapsed} panels={panels} />
          </SidebarUI>
        )}
      </Layout>
    </Layout>
  );
};

export default MainLayout;

export const panels = [
  {
    key: '1',
    icon: <InfoCircleOutlined />,
    title: 'KISA ÖZGEÇMİŞ',
    content: <Resume />
  },
  {
    key: '2',
    icon: <FolderOutlined />,
    title: 'DOSYALAR',
    content: 'merhaba2'
  },
  {
    key: '3',
    icon: <FieldTimeOutlined />,
    title: 'AKTİVİTELER',
    content: <Activities />
  }
];
