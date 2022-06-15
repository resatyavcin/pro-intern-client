import React, { Fragment } from 'react';
import { Layout, Menu, LayoutProps } from 'antd';

const { Sider } = Layout;

import styles from '../../assets/styles/Sidebar.module.scss';
import { useRouter } from 'next/router';
import SubMenu from 'antd/lib/menu/SubMenu';
import { useStudent } from '../../context/StudentContext';

interface ISubmenu {
  title: string;
  path: string;
  icon: JSX.Element;
}
export interface IMenuList {
  title: string;
  path: string;
  icon: JSX.Element;
  subMenu: boolean;
  subMenuContent?: ISubmenu[];
}

interface ISider extends LayoutProps {
  collapsed?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onCollapse?: () => void;
  width?: number;
  collapsedWidth?: number;
  menuList?: IMenuList[];
}
function SidebarUI(props: ISider) {
  const { collapsed, collapsedWidth, children, width, style, menuList } = props;
  const router = useRouter();
  const { selectStudent } = useStudent();

  return (
    <Sider
      className={styles.baseSidebar}
      collapsedWidth={collapsedWidth}
      width={width}
      style={style}
      trigger={null}
      collapsed={collapsed}
      collapsible
    >
      {menuList ? (
        <Menu
          style={{ minHeight: '93vh' }}
          mode="inline"
          onClick={({ key }) => {
            selectStudent([]);
            router.push(`${key}`);
          }}
        >
          {menuList.map((item, i) => (
            <Fragment key={i}>
              {item.subMenu ? (
                <SubMenu title={item.title} key={item.path} icon={item.icon}>
                  {item.subMenuContent &&
                    item.subMenuContent.map((contentItem, j) => (
                      <Fragment key={j}>
                        <Menu.Item key={contentItem.path} icon={contentItem.icon}>
                          {contentItem.title}
                        </Menu.Item>
                      </Fragment>
                    ))}
                </SubMenu>
              ) : (
                <Menu.Item key={item.path} icon={item.icon}>
                  {item.title}
                </Menu.Item>
              )}
            </Fragment>
          ))}
        </Menu>
      ) : (
        children
      )}
    </Sider>
  );
}

export default SidebarUI;
