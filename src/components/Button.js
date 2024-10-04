import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ variant, size, children, onClick }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variantClasses = {
    default: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
    destructive: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
    ghost: 'bg-transparent text-sky-500 hover:bg-gray-50 focus:ring-gray-500', // Updated ghost text color to text-sky-500
    link: 'bg-transparent text-blue-500 underline hover:text-blue-600 focus:ring-blue-500',
    
  };
  const sizeClasses = {
    default: 'px-4 py-2 text-sm',
    sm: 'px-3 py-1 text-xs',
    lg: 'px-6 py-3 text-lg',
    icon: 'p-2',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']),
  size: PropTypes.oneOf(['default', 'sm', 'lg', 'icon']),
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'default',
  size: 'default',
  onClick: () => {},
};

export default Button;
