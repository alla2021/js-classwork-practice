import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './main.scss';

const MainLayout = ({ children }) => (
  <>
    <Header />
    <main className="container">{children}</main>
    <Footer />
  </>
);

export default MainLayout;
