import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'dark-glass';
}

export const Card: React.FC<CardProps> = ({ children, className = '', variant = 'default' }) => {
  const variants = {
    default: 'bg-white shadow-card rounded-md md:rounded-lg',
    glass: 'glass rounded-md md:rounded-lg',
    'dark-glass': 'glass-dark rounded-md md:rounded-lg',
  };

  return (
    <div className={`${variants[variant]} ${className} overflow-hidden transition-all duration-300 hover:shadow-soft`}>
      {children}
    </div>
  );
};
