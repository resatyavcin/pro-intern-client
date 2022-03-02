import type { NextPage } from 'next';
import { useContext, useEffect } from 'react';

import AuthLayout from '../core/AuthLayout';
import { LanguageContext } from '../context/LanguageContext';

import { Select } from 'antd';

import { FormattedMessage } from 'react-intl';
import { allLanguages, languages } from '../common/locales/translate';

const { Option } = Select;

const Home: NextPage = () => {
  const { switchLang, setSwitchLang } = useContext(LanguageContext);

  function handleChange(value: languages) {
    setSwitchLang(value);
  }

  return (
    <AuthLayout>
      <Select defaultValue={switchLang} style={{ width: 70 }} onChange={handleChange}>
        {allLanguages.map((language) => (
          <Option key={language} label={language}>
            {language}
          </Option>
        ))}
      </Select>

      <FormattedMessage id="WELCOME" />
    </AuthLayout>
  );
};

export default Home;
