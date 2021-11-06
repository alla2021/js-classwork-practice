import React from 'react';

class UserCard extends React.Component {
  render() {
    const { firstName, lastName, age } = this.props;

    return (
      <li>
        Name: {firstName}
        <br />
        Last Name: {lastName}
        <br />
        Age: {age}
        <br />
      </li>
    );
  }
}

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
    this.fetchUsers();
  }

  fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }

  render() {
    // const { users } = this.props;
    const { users } = this.state;

    return (
      users.lenght !== 0 && (
        <ul>
          {/* {users.map((item) => (
            <UserCard key={item.firstName} {...item} />
          ))} */}
          {users.map(({ id, name, email }) => (
            <li key={id}>
              Name: {name}; Email: {email}
            </li>
          ))}
        </ul>
      )
    );
  }
}

export default List;
