import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { stateLogger } from '../../stateLogger';
import Backdrop from '../BackDrop';

const drawer = {
  hidden: {
    x: '-100vh',
    opacity: 0,
  },
  visible: {
    x: '0',
    opacity: 1,
    transition: {
      duration: 0.5,
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    x: '100vh',
    opacity: 0,
    transition: { duration: 1 },
  },
};

const Modal = ({ handleClose, children, type, className }: any) => {
  // * Log state
  useEffect(() => {
    stateLogger('Modal', true);
    return () => stateLogger('Modal', false);
  }, []);

  return (
    <Backdrop onClick={handleClose}>
      {type === 'drawer' && (
        <motion.div
          onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          className={`drawer ${className}`}
          variants={drawer}
          initial='hidden'
          animate='visible'
          exit='exit'
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragElastic={0.9}
          dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
        >
          <div>{children}</div>
        </motion.div>
      )}
    </Backdrop>
  );
};

export default Modal;
