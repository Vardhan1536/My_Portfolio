import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hover = true,
}) => {
  const baseStyles = 'bg-white/5 border border-white/10 rounded-2xl overflow-hidden';
  
  return hover ? (
    <motion.div
      className={`${baseStyles} ${className}`}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: '0 0 15px rgba(99, 102, 241, 0.2)',
        borderColor: 'rgba(255, 255, 255, 0.2)'
      }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  ) : (
    <div className={`${baseStyles} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;