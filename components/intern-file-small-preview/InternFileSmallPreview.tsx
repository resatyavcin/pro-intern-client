import React, { Fragment } from 'react';
import { FileProtectOutlined, LockFilled, UnlockFilled, FilePdfFilled } from '@ant-design/icons';
import TypographyUI from '../ui/typography/Typography';
import CardUI from '../ui/card/cardUI';
import styles from '../../assets/styles/InternFilePreview.module.scss';
interface IFile {
  lockFile: boolean;
}
function InternFileSmallPreview(props: IFile) {
  const { lockFile } = props;
  return (
    <Fragment>
      <div className={styles.previewSmallFilesWrapper}>
        <div className={styles.previewSmall}>
          <div className={styles.previewSmallHeader}>
            {lockFile ? (
              <Fragment>
                <FileProtectOutlined className={styles.fileIcon} />
                <LockFilled className={styles.lockIcon} />
              </Fragment>
            ) : (
              <Fragment>
                <FilePdfFilled className={styles.fileIcon} />
                <UnlockFilled className={styles.lockIcon} />
              </Fragment>
            )}
          </div>
          <TypographyUI
            label={lockFile ? 'Bu dosya en son aşama olan Stajın Bitmesi durumunda açılır.' : 'staj-basvuru.pdf'}
            typographyType={lockFile ? 'text' : 'link'}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default InternFileSmallPreview;
