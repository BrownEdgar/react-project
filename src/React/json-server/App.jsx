import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.scss";
import { nanoid } from 'nanoid'
import Pagination from '../compponents/pagination2/Pagination.jsx';

export default function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(2);
  const [perPage, setPerPage] = useState(3);
  const [total, setTotal] = useState(10)
  const newPosts = () => {
    axios(`http://localhost:3000/users`, {
      params: {
        _limit: perPage,
        _start: perPage * (page - 1)
      }
    })
      .then(res => setUsers(res.data))
  }
  useEffect(() => {
    newPosts()
  }, [page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, srname, number } = e.target.elements;
    const user = {
      id: nanoid(6),
      name: name.value,
      srname: srname.value,
      number: number.value
    };
    axios.post("http://localhost:3000/users", user)
      .then(res => {
        newPosts();
        setTotal(total + 1)
        e.target.reset()
      })
    console.log(user);


  }

  const setPages = (n) => { setPage(n) }
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' name='name' required />
        <input type="text" placeholder='Surname' name='srname' required />
        <input type="number" placeholder="Age" name="number" min={16} max={100} required />
        <input type="tel" placeholder="phone" name="phone" required />

        <input type="submit" value="Save user" />
      </form>
      <div className='App__users'>
        {users.map(
          elem => {
            return (
              <div key={elem.id}>
                <h2>{elem.name} {elem.srname}</h2>
                <h3>{elem.age} Year</h3>
                <span>phone: {elem.phone}</span>
              </div>
            )
          }
        )}
      </div>
      <Pagination total={total} perPage={perPage} setPages={setPages} />
    </div>
  );
}

