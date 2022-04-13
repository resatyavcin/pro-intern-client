import React from 'react';
import MainLayout from '../core/MainLayout';
import { PRIVATE_ROUTE_CONFIG } from '../routes/privateRoute';

function Settings() {
  return <MainLayout>setting</MainLayout>;
}

export default Settings;

export async function getServerSideProps() {
  return {
    props: { ...PRIVATE_ROUTE_CONFIG.SETTINGS }
  };
}
