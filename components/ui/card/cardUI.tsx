import React from 'react';
import { Alert, Card, CardProps, Divider } from 'antd';
import { IconType } from 'react-icons';
import TypographyUI from '../typography/Typography';

interface ICardProps extends CardProps {
  icon: IconType;
  headerTitle?: string;
  headerLabel?: string;
  footerLabel?: string;
  footerLink?: string;
}

import styles from '../../../assets/styles/Card.module.scss';
import { FormattedMessage } from 'react-intl';
import { useAuth } from '../../../context/AuthContext';

function CardUI(props: ICardProps) {
  const { children, icon, headerTitle, headerLabel, footerLabel, footerLink } = props;
  const { error } = useAuth();

  const CardIcon = icon;

  return (
    <Card className={styles.baseCard}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }} className="card_header">
          <CardIcon
            style={{
              width: '35px',
              height: '35px',
              color: '#11d40b',
              backgroundColor: '#cbfcc564',
              padding: 7,
              borderRadius: '50%'
            }}
          />
          {headerTitle ? (
            <TypographyUI
              style={{ marginBottom: 0, marginLeft: 10 }}
              typographyType="title"
              level={3}
              label={headerTitle}
            />
          ) : null}
        </div>
        {headerLabel ? <TypographyUI label={headerLabel} typographyType={'text'} /> : null}
        <Divider style={{ marginBottom: 20 }} />
        {error ? (
          <Alert style={{ marginBottom: 14 }} message={<FormattedMessage id={error} />} type="error" showIcon />
        ) : null}
      </div>
      <div className="card_content">{children}</div>
      <div className="card_footer">
        {footerLabel && footerLabel ? (
          <div style={{ textAlign: 'center' }}>
            <Divider style={{ marginTop: 0 }} />
            {footerLabel ? <TypographyUI label={footerLabel} typographyType={'text'} /> : null}
            {footerLink ? <TypographyUI label={footerLink} typographyType={'link'} /> : null}
          </div>
        ) : null}
      </div>
    </Card>
  );
}

export default CardUI;
