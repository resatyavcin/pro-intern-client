import { Spin } from 'antd';
import React, { useState } from 'react';

import TimelineUI from '../ui/timeline/Timeline';

function Activities() {
  const [current] = useState('app1');

  return (
    <Spin spinning={true ? false : true} delay={500}>
      {current === 'app1' ? (
        <TimelineUI
          style={{ marginTop: 40 }}
          events={[
            { label: 'TIMELINE_INTERN_FILES_PROGRESS.0' },
            { label: 'TIMELINE_INTERN_FILES_PROGRESS.1', active: true },
            {
              label: 'TIMELINE_INTERN_FILES_PROGRESS.2'
            },
            { label: 'TIMELINE_INTERN_FILES_PROGRESS.3' }
          ]}
        />
      ) : null}
    </Spin>
  );
}

export default Activities;
