//Next Import
import type { NextPage } from 'next';
import MainLayout from '../core/MainLayout';
import { PRIVATE_ROUTE_CONFIG } from '../routes/privateRoute';

const Home: NextPage = () => <MainLayout>Home</MainLayout>;

export default Home;

export async function getServerSideProps() {
  return {
    props: { ...PRIVATE_ROUTE_CONFIG.HOME }
  };
}
