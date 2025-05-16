import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  href?: string;
  download?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  onClick,
  className = '',
  href,
  download,
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300';
  
  const variantStyles = {
    primary: 'bg-primary/80 text-white hover:bg-primary backdrop-blur-sm',
    secondary: 'bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20',
    ghost: 'bg-transparent text-dark-200 hover:bg-white/10 backdrop-blur-sm',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-2',
    md: 'text-base px-4 py-2.5',
    lg: 'text-lg px-6 py-3',
  };
  
  const buttonContent = (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.98 },
    className: `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`,
  };

  if (href) {
    return (
      <motion.a 
        href={href}
        download={download}
        target={!download ? "_blank" : undefined}
        rel={!download ? "noreferrer" : undefined}
        {...motionProps}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button 
      onClick={onClick}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;