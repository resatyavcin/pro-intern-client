import React, { Fragment } from 'react';
import FormUI from '../ui/form/formUI';
import InputUI from '../ui/form/inputUI';

interface IInternApplicationOfficialForm {
  formProps: Object;
}

function InternApplicationOfficialForm(props: IInternApplicationOfficialForm) {
  const { formProps } = props;

  return (
    <Fragment>
      <InputUI
        name="officialNameSurname"
        placeholder="Yetkili Adı Soyadı"
        rules={[{ required: true, message: 'Lütfen bu alanı boş bırakmayınız.' }]}
      />
      <InputUI
        name="officialMissionArea"
        placeholder="Yetkili Çalışma Alanı"
        rules={[{ required: true, message: 'Lütfen bu alanı boş bırakmayınız.' }]}
      />

      <InputUI
        name="officialPhone"
        placeholder="Yetkili Telefon"
        rules={[{ required: true, message: 'Lütfen bu alanı boş bırakmayınız.' }]}
      />

      <InputUI
        name="officialEmail"
        placeholder="Yetkili E-posta"
        rules={[{ required: true, message: 'Lütfen bu alanı boş bırakmayınız.' }]}
      />
    </Fragment>
  );
}

export default InternApplicationOfficialForm;
