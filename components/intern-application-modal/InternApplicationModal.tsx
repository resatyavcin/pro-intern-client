import React, { useState } from 'react';
import { Steps } from 'antd';
import { Modal } from 'antd';
import InternApplicationCompanyForm from '../intern-application-company-form/InternApplicationCompanyForm';
import InternApplicationOfficialForm from '../intern-application-official-form/InternApplicationOfficialForm';
import FormUI from '../ui/form/formUI';

const { Step } = Steps;

interface IInternApplicationForm {
  modalProps: Object;
  formProps: Object;
}

function InternApplicationModal(props: IInternApplicationForm) {
  const { modalProps, formProps } = props;
  const [current, setCurrent] = useState<number>(0);

  const onChange = (current: number) => {
    setCurrent(current);
  };

  return (
    <Modal title="Staj Başvurusu" okText="Başvuruyu Gönder" cancelText="Vazgeç" {...modalProps}>
      <Steps style={{ marginBottom: 20 }} onChange={onChange} size="small" current={current} type="navigation">
        <Step title="Şirket Bilgileri" />
        <Step title="Şirket Yetkilisi Bilgileri" />
      </Steps>

      <FormUI {...formProps}>
        <div style={current === 1 ? { display: 'none' } : {}}>
          <InternApplicationCompanyForm formProps={formProps} />
        </div>
        <div style={current === 0 ? { display: 'none' } : {}}>
          <InternApplicationOfficialForm formProps={formProps} />
        </div>
      </FormUI>
    </Modal>
  );
}

export default InternApplicationModal;
