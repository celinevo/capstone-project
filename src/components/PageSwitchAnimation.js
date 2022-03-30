import { motion } from 'framer-motion';

const variants = {
  initial: {
    opacity: 0,
    y: '100vw',
    scale: 1,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: '-100vw',
    scale: 1,
  },
};

const transition = {
  type: 'tween',
  ease: 'backInOut',
  duration: 1,
};
export default function PageSwitchAnimation({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}
