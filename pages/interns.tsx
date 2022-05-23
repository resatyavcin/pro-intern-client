import React from 'react';
import MainLayout from '../core/MainLayout';
import { PRIVATE_ROUTE_CONFIG } from '../routes/privateRoute';
import { useIntern } from '../context/InternContext';
import ResultUI from '../components/ui/result/Result';

import InternCard from '../components/intern-card/InternCard';
import InternApplicationForm from '../components/intern-application-modal/InternApplicationModal';
import { Store, useModalForm } from 'sunflower-antd';

import { Form } from 'antd';

function Interns() {
  const { allInterns, applicationIntern } = useIntern();

  const [form] = Form.useForm();

  const { modalProps, formProps, show } = useModalForm({
    defaultVisible: false,
    autoSubmitClose: true,
    form,
    async submit(data) {
      await applicationIntern(data);
    }
  });

  return (
    <MainLayout>
      <InternApplicationForm modalProps={modalProps} formProps={formProps} />

      {allInterns.length === 0 ? (
        <ResultUI
          key="haveAInterns"
          status="warning"
          subTitle="INTERN.NO_INTERNSHIP_SUBTITLE"
          title="INTERN.NO_INTERNSHIP_TITLE"
          leftButtonLabel="BUTTON.MAKE_AN_APPLICATION"
          leftButtonOnClick={show}
        />
      ) : (
        allInterns.map((intern, i) => <InternCard key={i} point={i + 1} intern={intern} />)
      )}
    </MainLayout>
  );
}

export default Interns;

export async function getServerSideProps() {
  return {
    props: { ...PRIVATE_ROUTE_CONFIG.INTERNS }
  };
}
