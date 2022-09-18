import { motion } from 'framer-motion';

const CloseButton = ({ onClick, label, className }: any) => (
  <motion.button
    className={`close-btn ${className}`}
    type='button'
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
);

export default CloseButton;
