import { motion } from 'framer-motion';
import useModal from '../../hooks/useModal';
import Modal from '../Modal';
import { DemoText } from './DemoText';

const DrawerDemo = () => {
  const { modalOpen, close, open } = useModal();
  return (
    <div>
      {modalOpen && (
        <Modal
          modalOpen={modalOpen}
          text='drawer'
          type='drawer'
          handleClose={close}
          className='h-auto orange-gradient'
        >
          <DemoText handleClose={close} text='Shonjoy' />
        </Modal>
      )}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='save-button'
        onClick={open}
      >
        Launch Drawer
      </motion.button>
    </div>
  );
};

export default DrawerDemo;
