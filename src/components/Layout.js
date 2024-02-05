import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto mt-2 bg-gray-100  p-4">
        {children}
      </div>
    </>
  );
}

export default Layout;
