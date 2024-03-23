import React, { useState, useEffect } from 'react';
import './App.scss';
import Pagination from '../compponents/pagenation/Pagenation.jsx';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/posts?_start=${page}&_limit=${perPage}`)
      .then(res => res.json())
      .then(data => setPosts(data))
      .finally(() => setLoading(false));
  }, [page, perPage]);


  const setPages = (n) => { setPage(n) }


  return (
    <div className='Container'>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className='Container__block'>
          {posts.map(post => (
            <div key={post.id} className='Container__block__posts'>
              <h1>{post.id}. {post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
      <Pagination total={100} perPage={perPage} setPages={setPages} />
    </div>
  );
}