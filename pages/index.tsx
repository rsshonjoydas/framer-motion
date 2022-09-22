import type { NextPage } from 'next';
import DrawerDemo from '../components/Demo/DrawerDemo';
import ModalDemo from '../components/Demo/ModalDemo';
import NotificationDemo from '../components/Demo/NotificationDemo';

const Home: NextPage = () => (
  <>
    <h2>RS Shonjoy - Roboto</h2>
    <h1 className='font-cursive'>RS Shonjoy - Cursive</h1>
    <h2 className='font-poppins'>RS Shonjoy - Poppins</h2>
    <h2 className='font-montserrat'>RS Shonjoy - Montserrat</h2>
    <p className='text-primary-600'>RS Shonjoy</p>
    <br />
    <ModalDemo />
    <br />
    <DrawerDemo />
    <br />
    <NotificationDemo />
  </>
);

export default Home;
