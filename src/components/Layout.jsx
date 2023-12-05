import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <main>
          <Outlet />
        </main>{' '}
        <Footer />
      </div>
    </div>
  );
};
