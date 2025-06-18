import React from 'react';

const Button = ({ title, id, rightIcon, leftIcon, containerClass = '', onClick, className = '' }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-yellow-300 px-8 py-2 text-black ${containerClass} ${className}`}
    >
      <span className="relative inline-flex items-center overflow-hidden font-general text-xs uppercase gap-1">
        {leftIcon && <span>{leftIcon}</span>}
        <span>{title}</span>
        {rightIcon && <span>{rightIcon}</span>}
      </span>
    </button>
  );
};

export default Button;
