import { AnimatePresence, motion } from 'framer-motion';
import { NextPage } from 'next';
import { useState } from 'react';
import { framerLogger } from '../../stateLogger';
import { add } from '../../utils/notification';
import Notification from '../Notification';

interface Provider {
  text: string;
  style: string;
}

const NotificationContainer = ({ children, position }: any) => (
  <ul className={`notificationUl ${position}`}>
    <AnimatePresence initial={false} onExitComplete={() => framerLogger('Notifications container')}>
      {children}
    </AnimatePresence>
  </ul>
);

const NotificationDemo: NextPage = () => {
  // Notifications state
  const [notifications, setNotifications] = useState<Provider[]>([]);

  // Notification text
  const [text] = useState('Awesome job! 🚀');

  // Notification style
  const [style] = useState('error');

  return (
    <>
      <motion.main>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className='add-button'
          onClick={() => setNotifications(add(notifications, text, style))}
          // onClick={() => setNotifications(add(notifications, 'RS Shonjoy', 'error'))}
        >
          + Stack em up
        </motion.button>
      </motion.main>

      <NotificationContainer position='top'>
        {notifications &&
          notifications.map((notification) => (
            <Notification
              key={notification}
              notification={notification}
              notifications={notifications}
              setNotifications={setNotifications}
            />
          ))}
      </NotificationContainer>
    </>
  );
};

export default NotificationDemo;
