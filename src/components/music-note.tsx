// MusicNote.tsx
"use client";

import { motion } from 'framer-motion';

const MusicNote = ({ x, y, delay }) => (
  <motion.div
    className="absolute text-primary"
    style={{ x, y }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
  >
    ♪
  </motion.div>
);

export default MusicNote;