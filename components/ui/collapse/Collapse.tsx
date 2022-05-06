//import React
import React, { Fragment, useState } from 'react';

//import Antd
import { Collapse, CollapseProps } from 'antd';
import { useCollapse } from '../../../context/ActionPanelToggleContext';

const { Panel } = Collapse;

import styles from '../../../assets/styles/Collapse.module.scss';

interface ICollapsePanelProps {
  key: string;
  icon: React.ReactNode;
  title: string;
  content: React.ReactNode;
}

interface ICollapseProps extends CollapseProps {
  collapsed: boolean;
  panels?: ICollapsePanelProps[];
}

function CollapseUI(props: ICollapseProps) {
  const { panels } = props;

  const { collapsed, setCollapsed } = useCollapse();

  const [activeKey, setActiveKey] = useState<string>('1');

  const toggle = () => {
    collapsed ? null : setCollapsed(true);
  };

  return (
    <Fragment>
      <Collapse
        activeKey={collapsed ? activeKey : 'none'}
        className={styles.baseContent}
        onChange={toggle}
        accordion={true}
        ghost
        style={{ border: 'none' }}
      >
        {panels?.map((panel) => (
          <Panel
            style={collapsed ? { borderBottom: '1px solid #d5d5d5', minHeight: 'calc(100vh-58px)' } : {}}
            className={styles.panelContent}
            key={panel.key}
            showArrow={false}
            forceRender={true}
            header={
              collapsed ? (
                <div onClick={() => setActiveKey(panel.key)} className={styles.collapseRow}>
                  <div className={styles.collapseIcon && activeKey == panel.key ? styles.collapseIconActive : ''}>
                    {panel.icon}
                  </div>
                  <div className={styles.panelTitle}>
                    <div className={activeKey == panel.key ? styles.active : ''}>{panel.title.toLocaleUpperCase()}</div>
                  </div>
                </div>
              ) : (
                <div onClick={() => setActiveKey(panel.key)}>
                  <div className={styles.collapseIconNotCollapsed}>{panel.icon} </div>
                  <div className={styles.displayNonePanelHeader}>
                    <div className={activeKey == panel.key ? styles.active : ''}>{panel.title.toLocaleUpperCase()}</div>
                  </div>
                </div>
              )
            }
          >
            <div style={{ height: '524.4px', overflow: 'scroll', padding: 10, border: 'none' }}>
              <p>{panel.content}</p>
            </div>
          </Panel>
        ))}
      </Collapse>
    </Fragment>
  );
}

export default CollapseUI;
