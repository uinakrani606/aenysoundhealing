import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-orange text-white hover:bg-opacity-90 shadow-soft hover:shadow-card focus:ring-orange',
    secondary: 'bg-green text-white hover:bg-dark-green shadow-soft hover:shadow-card focus:ring-green',
    outline: 'border-2 border-border text-text hover:border-primary hover:text-primary focus:ring-primary',
    ghost: 'text-text hover:text-primary hover:bg-light focus:ring-primary',
  };

  const sizes = {
    sm: 'px-4 py-2 text-small',
    md: 'px-6 py-3 text-body',
    lg: 'px-8 py-4 text-heading-xs',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
