//import React
import React from 'react';

//import Ant Design
import { Timeline, TimelineProps } from 'antd';

//import Icons
import { ClockCircleOutlined, CheckCircleFilled } from '@ant-design/icons';

//import components
import TimelineItemUI from './TimelineItem';
import TypographyUI from '../typography/Typography';
import Countdown from 'antd/lib/statistic/Countdown';

export interface IEventTypes {
  label: string;
  active?: boolean;
}

interface ITimeline extends TimelineProps {
  events: IEventTypes[];
}

let activeIndex = 0;

function TimelineUI(props: ITimeline) {
  const { events } = props;

  events.findIndex((value, i) => {
    if (value.active) {
      activeIndex = i;
    }
  });

  const utilsRender = (event: IEventTypes, i: number) => {
    if (event.active) {
      return {
        icon: <ClockCircleOutlined />,
        color: 'red',
        countDown: <Countdown value={Date.now() + 100 * 60 * 24 * 2} />,
        deadLine: <TypographyUI typographyType="text" disabled label="Son tarih: 22/09/2000" />
      };
    } else if (event.active === undefined && activeIndex > i) {
      return {
        icon: <CheckCircleFilled />,
        color: 'green',
        countDown: null,
        deadLine: <TypographyUI typographyType="text" disabled italic label="(Tamamlandı.)" />
      };
    } else {
      return {
        deadLine: <TypographyUI typographyType="text" disabled label="Son tarih: 32/09/2000" />
      };
    }
  };

  return (
    <Timeline {...props}>
      {events.map((event, i) => {
        return (
          <TimelineItemUI key={i} dot={utilsRender(event, i)?.icon} color={utilsRender(event, i)?.color}>
            <TypographyUI typographyType="text" label={event.label} />
            <br />
            {utilsRender(event, i)?.deadLine}
            {utilsRender(event, i)?.countDown}
          </TimelineItemUI>
        );
      })}
    </Timeline>
  );
}

export default TimelineUI;
