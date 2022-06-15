import React, { Fragment } from 'react';
import InputUI from '../ui/form/inputUI';
import { DatePicker, Radio } from 'antd';
import FormItem from 'antd/lib/form/FormItem';

const { RangePicker } = DatePicker;

const dateFormat = 'DD/MM/YYYY';

interface IInternApplicationCompanyForm {
  formProps: Object;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function InternApplicationCompanyForm(_props: IInternApplicationCompanyForm) {
  return (
    <Fragment>
      <InputUI
        name="companyName"
        placeholder="Şirket Adı"
        rules={[{ required: true, message: 'Lütfen bu alanı boş bırakmayınız.' }]}
      />
      <InputUI
        name="companyAdress"
        placeholder="Şirket Adresi"
        rules={[{ required: true, message: 'Lütfen bu alanı boş bırakmayınız.' }]}
      />

      <InputUI
        name="companyActivityArea"
        placeholder="Şirket Faaliyet Alanı"
        rules={[{ required: true, message: 'Lütfen bu alanı boş bırakmayınız.' }]}
      />

      <InputUI
        name="companyTotalNumberOfEmployees"
        placeholder="Şirket Toplam Çalışan Sayısı"
        rules={[{ required: true, message: 'Lütfen bu alanı boş bırakmayınız.' }]}
      />

      <InputUI
        name="companyPhone"
        placeholder="Şirket Telefon"
        rules={[{ required: true, message: 'Lütfen bu alanı boş bırakmayınız.' }]}
      />

      <InputUI
        name="companyFax"
        placeholder="Şirket Fax"
        rules={[{ required: true, message: 'Lütfen bu alanı boş bırakmayınız.' }]}
      />

      <InputUI
        name="companyEmail"
        placeholder="Şirket E-posta"
        rules={[{ required: true, message: 'Lütfen bu alanı boş bırakmayınız.' }]}
      />
      <FormItem name={'rangeInternDate'} rules={[{ required: true, message: 'Lütfen bu alanı boş bırakmayınız.' }]}>
        <RangePicker
          placeholder={['Staj Başlama Tarihi', 'Staj Bitirme Tarihi']}
          format={dateFormat}
          //onChange={(e: any) => setAplicationForm({ ...applicationForm, startDate: e[0]._d, endDate: e[1]._d })}
        />
      </FormItem>

      <FormItem name="internshipPeriod" label="Staj Türü">
        <Radio.Group>
          <Radio value="Sömestr">Sömestr</Radio>
          <Radio value="Yaz">Yaz</Radio>
        </Radio.Group>
      </FormItem>
    </Fragment>
  );
}

export default InternApplicationCompanyForm;
