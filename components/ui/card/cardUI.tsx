import React from 'react';
import { Card, CardProps } from 'antd';

interface ICardProps extends CardProps {}

import styles from '../../../assets/styles/Card.module.scss';

function CardUI(props: ICardProps) {
  const { children } = props;
  return <Card className={styles.baseCard}>{children}</Card>;
}

export default CardUI;
