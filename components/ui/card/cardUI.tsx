import React, { Fragment } from 'react';
import { Alert, Card, CardProps, Divider } from 'antd';
import { IconType } from 'react-icons';
import TypographyUI from '../typography/Typography';

type CardType = 'normal' | 'auth';
interface ICardProps extends CardProps {
  style?: React.CSSProperties;
  cardType: CardType;
  icon?: IconType;
  headerTitle?: string;
  headerLabel?: string;
  footerLabel?: string;
  footerLink?: string;
}

import styles from '../../../assets/styles/Card.module.scss';
import { FormattedMessage } from 'react-intl';
import { useAuth } from '../../../context/AuthContext';

function CardUI(props: ICardProps) {
  const { children, icon, style, headerTitle, headerLabel, footerLabel, footerLink, cardType } = props;
  const { error } = useAuth();

  const CardIcon = icon;

  return (
    <Card style={style} className={styles.baseCard}>
      <div>
        {cardType === 'auth' && (
          <Fragment>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }} className="card_header">
              {CardIcon && (
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
              )}
              {headerTitle && (
                <TypographyUI
                  style={{ marginBottom: 0, marginLeft: 10 }}
                  typographytype="title"
                  level={3}
                  label={headerTitle}
                />
              )}
            </div>
            {headerLabel && <TypographyUI label={headerLabel} typographytype={'text'} />}
            <Divider style={{ marginBottom: 20 }} />
            {error && (
              <Alert style={{ marginBottom: 14 }} message={<FormattedMessage id={error} />} type="error" showIcon />
            )}
          </Fragment>
        )}
      </div>
      <div className="card_content">{children}</div>
      <div className="card_footer">
        {footerLabel && footerLabel && (
          <div style={{ textAlign: 'center' }}>
            <Divider style={{ marginTop: 0 }} />
            {footerLabel && <TypographyUI label={footerLabel} typographytype={'text'} />}
            {footerLink && <TypographyUI label={footerLink} typographytype={'link'} />}
          </div>
        )}
      </div>
    </Card>
  );
}

export default CardUI;
