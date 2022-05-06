import React, { Fragment, useState } from 'react';
import { useStudent } from '../../context/StudentContext';
import { Avatar } from 'antd';
import SidebarUI from '../sidebar/Sidebar';
import stylesToggle from '../../assets/styles/Toggle.module.scss';
import { CgPushChevronRight, CgPushChevronLeft } from 'react-icons/cg';

import { useCollapse } from '../../context/ActionPanelToggleContext';
import CollapseUI from '../ui/collapse/Collapse';
import { panels } from '../../core/MainLayout';
function ToolBarUI() {
  const { selectedStudent } = useStudent();
  const { collapsed, setCollapsed } = useCollapse();

  const [selectAvatar, setSelectAvatar] = useState<string>();

  const isSelect = (id: string) => (id === selectAvatar ? true : false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <SidebarUI
      collapsedWidth={330}
      width={56}
      style={{ height: 'calc(100vh-58px)', background: '#ffffff', borderLeft: '1px solid #d5d5d5' }}
      collapsed={collapsed}
    >
      <div className={stylesToggle.wrapperToggle}>
        <div className={collapsed ? stylesToggle.contentToggleRow : stylesToggle.toggleRowContentDisplay}>
          {collapsed && selectedStudent?.length !== 0 ? (
            <Fragment>
              <Avatar.Group maxCount={2} maxStyle={{ background: '#7e3901' }}>
                {selectedStudent?.map((user) => (
                  <span
                    className={isSelect(user._id) ? 'ant-avatar ant-avatar-circle' : 'ant-avatar ant-avatar-circle'}
                    style={
                      isSelect(user._id)
                        ? {
                            backgroundColor: '#1890FF',
                            color: 'white',
                            fontWeight: 'bold',
                            zIndex: 9999
                          }
                        : {
                            backgroundColor: '#ffffff',
                            border: '1px solid #1890FF',
                            color: '#1890FF',
                            fontWeight: 'bold'
                          }
                    }
                    onClick={() => setSelectAvatar(user._id)}
                  >
                    {user.firstName[0]}{' '}
                  </span>
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
      {selectedStudent && selectedStudent.length > 0 && (
        <Fragment>
          <CollapseUI collapsed={collapsed} panels={panels} />
        </Fragment>
      )}
    </SidebarUI>
  );
}

export default ToolBarUI;
