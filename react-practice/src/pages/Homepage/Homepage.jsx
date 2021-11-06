import React from 'react';
import Aside from '../../components/Aside/Aside';
import Button from '../../components/Button';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import Greeting from '../../components/Greeting';
import Header from '../../components/Header/Header';
import List from '../../components/List';
import Modal from '../../components/Modal';
import Nav from '../../components/Nav';
import Numbers from '../../components/Number';

const users = [
  { firstName: 'audi', lastName: 'dfd', age: 33 },
  { firstName: 'bmw', lastName: 'dfdf', age: 33 },
  { firstName: 'honda', lastNamer: 'dfdf', age: 33 },
];

const Homepage = () => {
  return (
    <>
      <Header />
      <Nav list={['Home', 'Products', 'Contacts']} />

      <main>
        <Modal content="Lorem ipsum dolor sit amet" />

        <Aside />

        <Numbers from={3} to={20} odd />

        <Greeting name="Mike" />

        <Content>
          <List users={users}>
            <Button text="My button" color="green" type="submit" />
          </List>
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
