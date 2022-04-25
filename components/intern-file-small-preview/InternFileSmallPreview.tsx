import React, { Fragment } from 'react';
import { FileProtectOutlined, LockFilled, UnlockFilled, FilePdfFilled } from '@ant-design/icons';
import TypographyUI from '../ui/typography/Typography';
import CardUI from '../ui/card/cardUI';

interface IFile {
  lockFile: boolean;
}
function InternFileSmallPreview(props: IFile) {
  const { lockFile } = props;
  return (
    <Fragment>
      <div style={{ display: 'flex', flexWrap: 'wrap', overflow: 'scroll', height: 220 }}>
        <div
          style={{
            position: 'relative',
            alignItems: 'center',
            margin: '10px 20px 60px 0px',
            width: 176,
            height: 120
          }}
        >
          <div
            style={{
              background: '#f8f9fa',
              padding: 20,
              borderRadius: 10,
              position: 'relative',
              width: 176,
              height: 120,
              border: '1px solid #aab5bd'
            }}
          >
            {lockFile ? (
              <Fragment>
                <FileProtectOutlined
                  style={{ fontSize: 36, opacity: 0.4, color: '#068ee9', position: 'absolute', top: 42, left: 67 }}
                />
                <LockFilled style={{ fontSize: 16, color: '#068ee9', position: 'absolute', bottom: 5, right: 5 }} />
              </Fragment>
            ) : (
              <Fragment>
                <FilePdfFilled style={{ fontSize: 36, color: '#068ee9', position: 'absolute', top: 42, left: 67 }} />
                <UnlockFilled style={{ fontSize: 16, color: '#068ee9', position: 'absolute', bottom: 5, right: 5 }} />
              </Fragment>
            )}
          </div>
          <TypographyUI
            style={{ marginTop: 90 }}
            label={lockFile ? 'Bu dosya en son aşama olan Stajın Bitmesi durumunda açılır.' : 'staj-basvuru.pdf'}
            typographyType={lockFile ? 'text' : 'link'}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default InternFileSmallPreview;
