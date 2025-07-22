import React from 'react';

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="w-full max-w-[1200px] mx-auto px-4">
    {children}
  </div>
);

export default Container;