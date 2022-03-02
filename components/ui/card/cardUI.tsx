import React from 'react';
import { Card, CardProps } from 'antd';

interface ICardProps extends CardProps {}

function CardUI(props: ICardProps) {
  const { children } = props;
  return <Card>{children}</Card>;
}

export default CardUI;
