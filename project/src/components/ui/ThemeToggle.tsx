import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="p-2 rounded-full bg-white/10 backdrop-blur-sm"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        backgroundColor: theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
      }}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'dark' ? 0 : 360,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 0.5 }}
      >
        {theme === 'dark' ? (
          <Moon className="w-5 h-5 text-dark-200" />
        ) : (
          <Sun className="w-5 h-5 text-light-900" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;