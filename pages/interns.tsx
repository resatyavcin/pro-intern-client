import React, { useState, useEffect } from 'react';
import MainLayout from '../core/MainLayout';
import { PRIVATE_ROUTE_CONFIG } from '../routes/privateRoute';
import { Modal } from 'antd';
import { useIntern } from '../context/InternContext';
import ResultUI from '../components/ui/result/Result';

import InputUI from '../components/ui/form/inputUI';

import { DatePicker } from 'antd';

import InternCard from '../components/intern-card/InternCard';

const { RangePicker } = DatePicker;

const dateFormat = 'DD/MM/YYYY';

function Interns() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [applicationForm, setAplicationForm] = useState({});

  const { allInterns } = useIntern();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    //applicationIntern({ ...applicationForm });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    //console.log(allInterns);
  }, []);

  return (
    <MainLayout>
      <Modal
        title="Staj Başvurusu"
        visible={isModalVisible}
        okText="Başvuruyu Gönder"
        cancelText="Vazgeç"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <InputUI
          name="companyName"
          onChange={(e) => setAplicationForm({ ...applicationForm, companyName: e.target.value })}
          placeholder="Şirket Adı"
        />
        <RangePicker
          format={dateFormat}
          onChange={(e: any) => setAplicationForm({ ...applicationForm, startDate: e[0]._d, endDate: e[1]._d })}
        />
      </Modal>

      {allInterns.length === 0 ? (
        <ResultUI
          status="warning"
          subTitle="INTERN.NO_INTERNSHIP_SUBTITLE"
          title="INTERN.NO_INTERNSHIP_TITLE"
          leftButtonLabel="BUTTON.MAKE_AN_APPLICATION"
          leftButtonOnClick={showModal}
        />
      ) : (
        allInterns.map((intern, i) => <InternCard point={i + 1} intern={intern} />)
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
