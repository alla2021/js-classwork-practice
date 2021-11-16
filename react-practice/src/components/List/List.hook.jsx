import React, { useEffect, useState } from 'react';

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
    console.log('this.props :>> ', this.props);

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

const List = ({ title }) => {
  const [data, setData] = useState({
    posts: [],
    users: [],
  });

  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  console.log('setUsers :>> ', setUsers);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log('error :>> ', error));

    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    //   .then((data) => setData((prev) => ({ users: data, ...prev })))
    //   .catch((error) => console.log('error :>> ', error));
  }, []);

  const getPostsByUserId = (id) => {
    // fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    //   .then((response) => response.json())
    //   .then((posts) => setData((prev) => ({ posts: posts, ...prev })));
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  };

  return (
    <>
      <h1>{title}</h1>
      <UserList
        // users={data.users}
        // posts={data.posts}
        users={users}
        posts={posts}
        click={getPostsByUserId}
      />
    </>
  );
};

export default List;
