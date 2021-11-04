import React from 'react';
import Aside from '../../components/Aside/Aside';
import Button from '../../components/Button';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import List from '../../components/List';

const cars = [
  { name: 'audi', year: 2021 },
  { name: 'bmw', year: 2017 },
  { name: 'honda', year: 2002 },
];

const Homepage = () => {
  return (
    <>
      <Header />

      <main>
        <Aside />

        <Content>
          <List data={cars}>
            <Button text="My button" color="green" type="submit" />
          </List>
          dfdf
          <div></div>
        </Content>

        <Button text="Another button" color="#222222" isActive />

        <Button
          color="rgba(255, 0, 0, 0.6)"
          className="is--huge"
          type="reset"
          size="big"
          fontSize={33}
          isDisabled={true}
          isActive={false}
        />
      </main>

      <Footer />
    </>
  );
};

export default Homepage;
