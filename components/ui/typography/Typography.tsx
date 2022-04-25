import React from 'react';

import { Typography } from 'antd';
import { FormattedMessage } from 'react-intl';
import { TextProps } from 'antd/lib/typography/Text';

const { Text, Title, Paragraph, Link } = Typography;

type levelNumber = 1 | 2 | 3 | 4 | 5 | undefined;

interface ITypography extends TextProps {
  style?: React.CSSProperties;
  label: string;
  typographyType: string;
  level?: levelNumber;
  onClick?: () => void;
}

function TypographyUI(props: ITypography) {
  const { label, level, typographyType, onClick, style } = props;

  const labelUndefinedControl = label ? <FormattedMessage id={label} /> : null;

  const renderSwitch = (typographyType: string) => {
    switch (typographyType) {
      case 'text':
        return (
          <Text style={style} {...props}>
            {labelUndefinedControl}
          </Text>
        );
      case 'title':
        return (
          <Title style={style} level={level} {...props}>
            {labelUndefinedControl}
          </Title>
        );

      case 'paragraph':
        return <Paragraph {...props}>{labelUndefinedControl}</Paragraph>;
      case 'link':
        return (
          <Link style={style} onClick={onClick}>
            {labelUndefinedControl}
          </Link>
        );
      default:
        return (
          <Text style={style} {...props}>
            {labelUndefinedControl}
          </Text>
        );
    }
  };

  return <>{renderSwitch(typographyType)}</>;
}

export default TypographyUI;
