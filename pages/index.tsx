import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import Modal from '../components/Modal';
import { ModalText } from '../components/Modal/ModalComponents';
import useModal from '../hooks/useModal';

const Home: NextPage = () => {
  const { modalOpen, close, open } = useModal();

  return (
    <>
      <h2>RS Shonjoy - Roboto</h2>
      <h1 className='font-cursive'>RS Shonjoy - Cursive</h1>
      <h2 className='font-poppins'>RS Shonjoy - Poppins</h2>
      <h2 className='font-montserrat'>RS Shonjoy - Montserrat</h2>
      <p className='text-primary-600'>RS Shonjoy</p>
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          text='dropIn'
          type='dropIn'
          handleClose={close}
          className='h-auto orange-gradient'
        >
          <ModalText handleClose={close} text='Drop In' />
        </Modal>
      )}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='save-button'
        onClick={open}
      >
        Launch modal
      </motion.button>
    </>
  );
};

export default Home;
