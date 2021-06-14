import React from 'react';
import Header from '../Header/Header';

function Layout({ children }) {
  return (
    <div className="Main">
      <Header />
      {children}
    </div>
  );
}

export default Layout;