import React from 'react';

import { Typography } from 'antd';
import { FormattedMessage } from 'react-intl';
import { TextProps } from 'antd/lib/typography/Text';

const { Text, Title, Paragraph, Link } = Typography;

type levelNumber = 1 | 2 | 3 | 4 | 5 | undefined;
interface ITypography extends TextProps {
  label: string;
  typographyType: string;
  level?: levelNumber;
}

function TypographyUI(props: ITypography) {
  const { label, level, typographyType } = props;

  const renderSwitch = (typographyType: string) => {
    switch (typographyType) {
      case 'text':
        return (
          <Text {...props}>
            <FormattedMessage id={label} />
          </Text>
        );
      case 'title':
        return (
          <Title level={level} {...props}>
            <FormattedMessage id={label} />
          </Title>
        );

      case 'paragraph':
        return (
          <Paragraph {...props}>
            <FormattedMessage id={label} />
          </Paragraph>
        );
      case 'link':
        return (
          <Link>
            <FormattedMessage id={label} />
          </Link>
        );
    }
  };

  return <>{renderSwitch(typographyType)}</>;
}

export default TypographyUI;
