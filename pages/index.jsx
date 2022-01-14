import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Modal from "../components/Modal";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const close = () => setModalOpen(false)
  const open = () => setModalOpen(true)

  return(
  <div>
    <motion.button 
      whileHover={{scale: 1.1}} 
      whileTap={{scale: 0.9}} 
      type="button" 
      className="save-button" 
      onClick={() => (modalOpen ? close() : open())}
    >
      Launch Motion
    </motion.button>

    <AnimatePresence
      initial={false}
      exitBeforeEnter
      onExitComplete={() =>null}
    >
    {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}

    </AnimatePresence>
  </div>
)};

export default Home;
