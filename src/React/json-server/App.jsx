import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.scss";
import { nanoid } from 'nanoid'
import Pagination from '../compponents/pagination2/Pagination.jsx';
import Modal from '../compponents/Modal/Modal.jsx'

export default function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(3);
  const [total, setTotal] = useState(0);
  const [isopen, setIsopen] = useState(false)
  const [editUser, setEditUser] = useState(null)

  const newPosts = () => {
    axios.get(`http://localhost:3000/users`, {
      params: {
        _limit: perPage,
        _start: perPage * (page - 1)
      }
    })
      .then(res => setUsers(res.data));
  }

  useEffect(() => {
    newPosts();
  }, [page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, srname, number, phone } = e.target.elements;
    const user = {
      id: nanoid(6),
      name: name.value,
      srname: srname.value,
      number: number.value,
      phone: phone.value
    };
    axios.post("http://localhost:3000/users", user)
      .then(res => {
        newPosts();
        setTotal(total + 1);
        e.target.reset();
      })
      .catch(error => console.error("Error adding user:", error));
  }

  const setPages = (n) => { setPage(n); }

  const deleteById = (id) => {
    axios.delete(`http://localhost:3000/users/${id}`)
      .then(res => {
        setIsopen(true);
        setTimeout(() => setIsopen(false), 2000);
        newPosts();
      })
     
  }

  const edit = (id) => {
    setEditUser(id)
  }
  
  const changeUser = (e, userId) => {
    e.preventDefault();
    const { name, srname, number, phone } = e.target.elements;
    const newUser = {
      name: name.value,
      srname: srname.value,
      number: number.value,
      phone: phone.value
    };
    axios.patch(`http://localhost:3000/users/${userId}`, newUser)
      .then(res => {
        console.log(res);
        setEditUser(null);
        newPosts();
        setTotal(total+1)
      })
      .catch(error => console.error("Error updating user:", error));
  }

  return (
    <div className='App'>
      {isopen ? <Modal /> : null}
      <form className='App__form' onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' name='name' required />
        <input type="text" placeholder='Surname' name='srname' required />
        <input type="number" placeholder="Age" name="number" min={16} max={100} required />
        <input type="tel" placeholder="phone" name="phone" required />
        <input type="submit" value="Save user" />
      </form>

      <div className='App__users'>
        {users.map(elem => {
          return (
            <div key={elem.id}>
              {editUser === elem.id ? (
                <form className='editUser' onSubmit={(e) => changeUser(e, elem.id)}>
                  <input type="text" placeholder='Name' name='name' required defaultValue={elem.name} />
                  <input type="text" placeholder='Surname' name='srname' required defaultValue={elem.srname} />
                  <input type="number" placeholder="Age" name="number" min={16} max={100} required defaultValue={elem.number} />
                  <input type="tel" placeholder="phone" name="phone" required defaultValue={elem.phone} />
                  <input type="submit" value="Save" />
                  <button onClick={() => setEditUser(null)}>close</button>
                </form>
              ) : (
                <>
                  <button className='delete' onClick={() => deleteById(elem.id)}>
                    <i className="bi bi-trash3-fill"></i>
                  </button>
                  <h2>{elem.name} {elem.srname}</h2>
                  <h3>{elem.number} Years</h3>
                  <span>phone: {elem.phone}</span>
                  <button className='edit' onClick={() => edit(elem.id)}>
                    <i className="bi bi-pencil"></i>
                  </button>
                </>
              )}
            </div>
          )
        })}
      </div>
      <Pagination total={total} perPage={perPage} setPages={setPages} />
    </div>
  );
}
