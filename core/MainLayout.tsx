//import React
import React from 'react';

//import Styles
import styles from '../assets/styles/Sidebar.module.scss';

//import Components
import SidebarUI from '../components/sidebar/sidebar';
import HeaderUI from '../components/header/Header';
import Activities from '../components/short/activities';
import Resume from '../components/short/resume';

import { Layout } from 'antd';
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

//import Contexts
import { useStudent } from '../context/StudentContext';

import PrivateComponent from '../components/private-component/PrivateComponent';
import ToolBarUI from '../components/tool-bar/ToolBar';

const MainLayout = (props: { children: React.ReactNode }) => {
  const { children } = props;

  const { selectedStudent } = useStudent();

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
        title: 'Onayl??',
        path: '/documents?verify=true',
        icon: <FileDoneOutlined />
      },
      {
        title: 'Onaylanmam????',
        path: '/documents?verify=false',
        icon: <FileExclamationOutlined />
      }
    ]
  },
  { title: '????renciler', path: '/students', icon: <UserOutlined />, subMenu: false },
  { title: '????p Kutusu', path: '/trash', icon: <DeleteOutlined />, subMenu: false }
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
    title: 'KISA ??ZGE??M????',
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
    title: 'AKT??V??TELER',
    content: <Activities />
  }
];

export const filePanel = [
  {
    key: '1',
    icon: <InfoCircleOutlined />,
    title: 'DOSYA ??N??ZLEME',
    content: '<Resume />'
  },
  {
    key: '2',
    icon: <FieldTimeOutlined />,
    title: 'DOSYAYA A??T AKT??V??TELER',
    content: '<Activities />'
  }
];
