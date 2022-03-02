//Next Import
import type { NextPage } from 'next';

//Import component
import AuthLayout from '../core/AuthLayout';

//Import provider
import { FormattedMessage } from 'react-intl';

const Home: NextPage = () => {
  return (
    <AuthLayout>
      <FormattedMessage id="WELCOME" />
    </AuthLayout>
  );
};

export default Home;
