import React from 'react';
import { Result, ResultProps } from 'antd';
import ButtonUI from '../button/buttonUI';
import { FormattedMessage } from 'react-intl';

interface IResultProps extends ResultProps {
  status: 'success' | 'warning' | 'error';
  title: string;
  subTitle: string;
  leftButtonLabel?: string;
  rightButtonLabel?: string;
  leftButtonOnClick?: () => void;
  rightButtonOnClick?: () => void;
}

function ResultUI(props: IResultProps) {
  const { status, title, subTitle, leftButtonLabel, rightButtonLabel, leftButtonOnClick, rightButtonOnClick } = props;
  return (
    <Result
      status={status}
      title={<FormattedMessage id={title} />}
      subTitle={<FormattedMessage id={subTitle} />}
      extra={
        leftButtonLabel
          ? [<ButtonUI type="primary" label={leftButtonLabel} onClick={leftButtonOnClick} />]
          : rightButtonLabel
          ? [<ButtonUI type="primary" label={rightButtonLabel} onClick={rightButtonOnClick} />]
          : leftButtonLabel && rightButtonLabel
          ? [
              <ButtonUI label={leftButtonLabel} onClick={leftButtonOnClick} />,
              <ButtonUI type="primary" label={rightButtonLabel} onClick={rightButtonOnClick} />
            ]
          : null
      }
    />
  );
}

export default ResultUI;
