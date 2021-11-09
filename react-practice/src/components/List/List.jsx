import React from 'react';

const UserList = ({ users, click, posts }) => {
  console.log('posts :>> ', posts);
  return (
    <div style={{ display: 'flex' }}>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => click(user.id)}>
            Name: {user.name}
          </li>
        ))}
      </ul>
      <div>
        {posts.map((post) => (
          <li key={post.id}>{post.body}</li>
        ))}
      </div>
    </div>
  );
};

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      posts: [],
    };
    this.fetchUsers();
  }

  fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }));
  }

  getPostsByUserId(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((posts) => this.setState({ posts }));
  }

  render() {
    const { users, posts } = this.state;

    return (
      users.lenght !== 0 && (
        <UserList
          users={users}
          posts={posts}
          click={(id) => this.getPostsByUserId(id)}
        />
      )
    );
  }
}

export default List;
