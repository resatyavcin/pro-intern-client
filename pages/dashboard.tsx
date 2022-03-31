//import React
import React, { Fragment } from 'react';

import { Row, Col, Menu, Avatar } from 'antd';

const { SubMenu } = Menu;
import { InfoCircleOutlined, FolderOutlined, FieldTimeOutlined } from '@ant-design/icons';

//import Layout
import MainLayout from '../core/MainLayout';

//import Styles
import stylesSidebar from '../assets/styles/Sidebar.module.scss';
import stylesToggle from '../assets/styles/Toggle.module.scss';

import { Layout } from 'antd';

//import Components
import TableUI from '../components/ui/table/Table';
import SidebarUI from '../components/sidebar/sidebar';
import PreviewProfile from '../components/preview-profile/PreviewProfile';
import CollapseUI from '../components/ui/collapse/Collapse';
import { title } from 'process';
import { useCollapse } from '../context/ActionPanelToggleContext';
import { CgPushChevronRight, CgPushChevronLeft } from 'react-icons/cg';
import { useStudent } from '../context/StudentContext';

const { Content } = Layout;

function Dashboard() {
  const { collapsed, setCollapsed } = useCollapse();
  const { selectedUser } = useStudent();

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <MainLayout>
      <Content
        style={{
          minHeight: 'calc(100vh-58px)',
          padding: 30
        }}
        className={stylesSidebar.siteLayoutBackground}
      >
        <TableUI />
      </Content>
      <SidebarUI
        collapsedWidth={330}
        width={56}
        style={{ height: 'calc(100vh-58px)', background: '#ffffff', borderLeft: '1px solid #d5d5d5' }}
        collapsed={collapsed}
      >
        <div className={stylesToggle.wrapperToggle}>
          <div className={collapsed ? stylesToggle.contentToggleRow : stylesToggle.toggleRowContentDisplay}>
            {collapsed && selectedUser ? (
              <Fragment>
                <Avatar.Group maxCount={2} maxStyle={{ background: '#7e3901' }}>
                  {selectedUser?.map((user) => (
                    <Avatar style={{ backgroundColor: '#c25c09' }}>{user.first_name[0]}</Avatar>
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
    </MainLayout>
  );
}

export default Dashboard;

export const panels = [
  {
    key: '1',
    icon: <InfoCircleOutlined />,
    title: 'KISA ÖZGEÇMİŞ',
    content: 'merhaba2'
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
    content: <PreviewProfile />
  }
];
