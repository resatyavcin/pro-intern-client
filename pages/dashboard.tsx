//import React & Next
import React from 'react';

//import Layout
import MainLayout from '../core/MainLayout';
import { Statistic } from 'antd';

//import Components
import CardUI from '../components/ui/card/cardUI';

//import Provider
import { PRIVATE_ROUTE_CONFIG } from '../routes/privateRoute';

//import Icons
import { FaUserAstronaut } from 'react-icons/fa';

function Dashboard() {
  return (
    <MainLayout>
      <CardUI cardType="normal" icon={FaUserAstronaut}>
        <Statistic title="Aktif Kulanıcılar" value={112893} />
      </CardUI>
    </MainLayout>
  );
}

export default Dashboard;

export async function getServerSideProps() {
  return {
    props: { ...PRIVATE_ROUTE_CONFIG.DASHBOARD }
  };
}
