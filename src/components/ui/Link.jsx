import React from 'react';

export const Link = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-white/80 hover:text-white transition-colors duration-200 block md:inline-block font-medium"
    >
      {children}
    </a>
  );
};