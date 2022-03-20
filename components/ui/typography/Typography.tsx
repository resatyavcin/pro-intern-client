import React from 'react';

import { Typography } from 'antd';
import { FormattedMessage } from 'react-intl';
import { TextProps } from 'antd/lib/typography/Text';

const { Text, Title, Paragraph } = Typography;

interface ITypography extends TextProps {
  label?: string;
  typographyType: string;
}

function TypographyUI(props: ITypography) {
  const { label, typographyType } = props;

  const renderSwitch = (typographyType: string) => {
    switch (typographyType) {
      case 'text':
        return (
          <Text {...props}>
            <FormattedMessage id={label ? label : ''} />
          </Text>
        );
      case 'title':
        return (
          <Title {...props}>
            <FormattedMessage id={label ? label : ''} />
          </Title>
        );
      case 'paragraph':
        return (
          <Paragraph {...props}>
            <FormattedMessage id={label ? label : ''} />
          </Paragraph>
        );
    }
  };

  return <>{renderSwitch(typographyType)}</>;
}

export default TypographyUI;
