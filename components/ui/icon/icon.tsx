import React, { ComponentType, ReactChild } from 'react';
import styles from '../../../assets/styles/Icon.module.scss';

import Icon from '@ant-design/icons';

interface IIcon {
  children: React.ReactElement;
  component: typeof AntIconProps;
  sm?: Boolean;
}
function IconUI(props: IIcon) {
  const { sm, component } = props;
  return <Icon component={component} className={sm && `${styles.baseIcon} ${styles.sm}`} />;
}

export default IconUI;
