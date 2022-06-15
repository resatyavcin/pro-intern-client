import React, { Fragment } from 'react';
import InputUI from '../ui/form/inputUI';

interface IInternApplicationOfficialForm {
  formProps: Object;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function InternApplicationOfficialForm(_props: IInternApplicationOfficialForm) {
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
