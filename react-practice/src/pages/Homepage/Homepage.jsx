import React from 'react';
import Aside from '../../components/Aside/Aside';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const Homepage = () => {
  return (
    <>
      <Header />

      <main>
        <Aside />
        <Content />
      </main>

      <Footer />
    </>
  );
};

export default Homepage;
