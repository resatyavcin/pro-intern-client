import React from 'react';
import MainLayout from '../core/MainLayout';
import { PRIVATE_ROUTE_CONFIG } from '../routes/privateRoute';

function documents() {
  return <MainLayout>documents</MainLayout>;
}

export default documents;

export async function getServerSideProps() {
  return {
    props: { ...PRIVATE_ROUTE_CONFIG.DOCUMENTS }
  };
}
