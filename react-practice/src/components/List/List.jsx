import React from 'react';

class UserList extends React.PureComponent {
  constructor(params) {
    super();
    this.state = {
      posts: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps :>> ', prevProps);
    console.log('prevState :>> ', prevState);
  }

  render() {
    const { users, click, posts } = this.props;
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
  }
}

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      posts: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }))
      .catch((error) => console.log('error :>> ', error));
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
