import { motion } from "framer-motion"
import BackDrop from "../BackDrop"

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    }
  },
  exit: {
    y: "100vh",
    opacity: 0,
  }
}

const Modal = ({ handleClose, text }) => (
  <BackDrop onClick={handleClose}>
    <motion.div
      variants={dropIn}
      initial="hidden" 
      animate="visible" 
      exit="exit"
      drag
      onClick={(e) => e.stopPropagation()} 
      className="modal orange-gradient" 
    >
      <p>{text}</p>
    <button type="button" onClick={handleClose}>Close</button>
    </motion.div>
  </BackDrop>
)

export default Modal
