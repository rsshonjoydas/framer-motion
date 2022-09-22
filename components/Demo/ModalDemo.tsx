import { motion } from 'framer-motion';
import type { NextPage } from 'next';
import useModal from '../../hooks/useModal';
import Modal from '../Modal';
import { DemoText } from './DemoText';

const ModalDemo: NextPage = () => {
  const { modalOpen, close, open } = useModal();

  return (
    <>
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          text='dropIn'
          type='dropIn'
          handleClose={close}
          className='h-auto orange-gradient'
        >
          <DemoText handleClose={close} text='Drop In' />
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

export default ModalDemo;
