//import React
import React, { Fragment } from 'react';
import { useRouter } from 'next/router';

//import Styles
import styles from '../assets/styles/Sidebar.module.scss';
import stylesToggle from '../assets/styles/Toggle.module.scss';

//import Components
import SidebarUI from '../components/sidebar/Sidebar';
import HeaderUI from '../components/header/Header';
import Activities from '../components/short/activities';
import Resume from '../components/short/resume';

import { Avatar, Layout } from 'antd';
const Content = Layout;

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

import PrivateComponent from '../components/private-component/PrivateComponent';
import ToolBarUI from '../components/tool-bar/ToolBar';

const MainLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const { collapsed, setCollapsed } = useCollapse();

  const { selectedStudent } = useStudent();
  const router = useRouter();

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <HeaderUI />
      <Layout className={styles.siteLayout}>
        <PrivateComponent userRole="ADMIN">
          <SidebarUI menuList={ADMIN_SIDEBAR_MENU} />
        </PrivateComponent>

        <PrivateComponent userRole="STUDENT">
          <SidebarUI menuList={STUDENT_SIDEBAR_MENU} />
        </PrivateComponent>

        <Content
          style={{
            minHeight: 'calc(100vh-58px)',
            padding: 30
          }}
          className={styles.siteLayoutBackground}
        >
          {children}
        </Content>

        <PrivateComponent userRole="ADMIN">
          {selectedStudent && selectedStudent.length !== 0 ? <ToolBarUI /> : <></>}
        </PrivateComponent>

        <PrivateComponent userRole="STUDENT">
          <div></div>
          {/* {router.pathname === '/intern-detail/file' ? (
            <SidebarUI
              collapsedWidth={330}
              width={56}
              style={{ height: 'calc(100vh-58px)', background: '#ffffff', borderLeft: '1px solid #d5d5d5' }}
              collapsed={collapsed}
            >
              <div className={stylesToggle.wrapperToggle}>
                <div className={collapsed ? stylesToggle.contentToggleRow : stylesToggle.toggleRowContentDisplay}>
                  {collapsed ? <Fragment></Fragment> : <div style={{ fontWeight: 'bold' }}>PRO INTERN</div>}
                </div>
                {React.createElement(collapsed ? CgPushChevronLeft : CgPushChevronRight, {
                  onClick: toggle,
                  className: stylesToggle.baseToggle
                })}
              </div>

              <CollapseUI collapsed={collapsed} panels={filePanel} />
            </SidebarUI>
          ) : (
            <></>
          )} */}
        </PrivateComponent>
      </Layout>
    </Layout>
  );
};

export default MainLayout;

export const ADMIN_SIDEBAR_MENU = [
  { title: 'Ana Sayfa', path: '/dashboard', icon: <HomeOutlined />, subMenu: false },
  {
    title: 'Belgeler',
    path: '/files',
    icon: <FolderOutlined />,
    subMenu: true,
    subMenuContent: [
      {
        title: 'Onaylı',
        path: '/documents?verify=true',
        icon: <FileDoneOutlined />
      },
      {
        title: 'Onaylanmamış',
        path: '/documents?verify=false',
        icon: <FileExclamationOutlined />
      }
    ]
  },
  { title: 'Öğrenciler', path: '/students', icon: <UserOutlined />, subMenu: false },
  { title: 'Çöp Kutusu', path: '/trash', icon: <DeleteOutlined />, subMenu: false }
];

export const STUDENT_SIDEBAR_MENU = [
  { title: 'Ana Sayfa', path: '/', icon: <HomeOutlined />, subMenu: false },
  { title: 'Stajlar', path: '/interns', icon: <ThunderboltOutlined />, subMenu: false },
  { title: 'Ayarlar', path: '/settings', icon: <SettingOutlined />, subMenu: false }
];

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

export const filePanel = [
  {
    key: '1',
    icon: <InfoCircleOutlined />,
    title: 'DOSYA ÖNİZLEME',
    content: '<Resume />'
  },
  {
    key: '2',
    icon: <FieldTimeOutlined />,
    title: 'DOSYAYA AİT AKTİVİTELER',
    content: '<Activities />'
  }
];
