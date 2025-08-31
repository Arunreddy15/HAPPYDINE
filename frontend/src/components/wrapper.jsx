import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}   // start hidden & slightly right
      animate={{ opacity: 2, x: 0 }}   // fade in & slide to place
      exit={{ opacity: 0, x: -50 }}    // fade out & slide left
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
