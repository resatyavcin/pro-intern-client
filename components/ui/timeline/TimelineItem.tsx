import React from 'react';

//import Ant Design
import { Timeline, TimelineItemProps } from 'antd';
//import TypographyUI from '../typography/Typography';

const { Item } = Timeline;

interface ITimelineItemProps extends TimelineItemProps {
  children?: React.ReactNode;
}
function TimelineItemUI(props: ITimelineItemProps) {
  const { children } = props;

  return <Item {...props}>{children}</Item>;
}

export default TimelineItemUI;
