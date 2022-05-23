import React, { Fragment, useEffect, useState } from 'react';
import { Alert, message } from 'antd';
import router from 'next/router';
import { useAuth } from '../../context/AuthContext';
import { useIntern } from '../../context/InternContext';
import ButtonUI from '../ui/button/buttonUI';

interface ISignatureAction {
  pageNumber: number;
}

function SignatureAction(props: ISignatureAction) {
  const { pageNumber } = props;
  const [signatureAreaLimit, setSignatureAreaLimit] = useState<any[]>();

  const { signatureFile, error } = useIntern();
  const { user } = useAuth();

  useEffect(() => {
    let { student_signature_area, admin_signature_area } = router.query;

    if ('STUDENT' === user.role) {
      setSignatureAreaLimit([parseInt(student_signature_area as string)]);
    }
    if ('ADMIN' === user.role) {
      setSignatureAreaLimit([parseInt(admin_signature_area as string)]);
    }
  }, []);

  const errorMessage = (textError: string) => {
    message.error(textError);
  };

  const signatureFunc = () => {
    signatureFile(router.query.file_id as string, router.query.intern_id as string, pageNumber);
    if (error) {
      errorMessage(error);
    }
  };

  return (
    <Fragment>
      {!signatureAreaLimit?.includes(pageNumber) && (
        <Alert
          style={{ marginBottom: 10 }}
          message="Bu sayfada imza alanınız bulunmamaktadır."
          type="warning"
          showIcon
        />
      )}
      {signatureAreaLimit?.includes(pageNumber) && <ButtonUI onClick={signatureFunc} label="BUTTON.SIGNATURE" />}
    </Fragment>
  );
}

export default SignatureAction;
