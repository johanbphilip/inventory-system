import React from 'react';

export const Logo = ({ color }) => {
  return (
    <div className={`text-center ${color} flex items-end`}>
      <p className="text-4xl font-extrabold">Q</p>
      <p className="text-2xl font-normal">uantify</p>
    </div>
  );
};
