import React, { Fragment } from 'react';
import { useStudent } from '../../context/StudentContext';
import { Avatar } from 'antd';
import SidebarUI from '../sidebar/Sidebar';
import stylesToggle from '../assets/styles/Toggle.module.scss';
function ToolBarUI() {
  const { selectedStudent } = useStudent();
  return (
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
    </SidebarUI>
  );
}

export default ToolBarUI;
