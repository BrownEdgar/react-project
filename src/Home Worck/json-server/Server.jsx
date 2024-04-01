import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './Server.scss'
import { nanoid } from 'nanoid'
import JsonPaginate from 'react-paginate';


export default function Server() {
  const [user, setUser] = useState([])
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(6)
  const [edit, setEdit] = useState(null)

  const x = page * perPage
  const currentSlice = user.slice(x - perPage, x)

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1)
  }

  const getUser = () => {
    axios('http://localhost:3000/posts')
      .then(res => setUser(res.data))
  }
  useEffect(() => {
    getUser()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const { title, userId, body } = e.target;

    const isExists = user.some(post => post.title.toLowerCase() === title.value.toLowerCase())
    if (isExists) {
      alert("post alredy exist");
      return;
    }
    const data = {
      id: nanoid(7),
      title: title.value,
      userId: userId.value,
      body: body.value,
    }
    axios.post('http://localhost:3000/posts', data)
      .then(res => {
        getUser();
        e.target.reset()
      })
      .catch(err => console.log(err))
  }
  const deletUser = (id) => {
    axios
      .delete(`http://localhost:3000/posts/${id}`)
      .then(response => {
        getUser();
      })
  }
  const editUserId = (e,id) => {
    e.preventDefault()
    setEdit(id)
  }
  const changePost =(e,postId)=>{
    e.preventDefault();
    const { title, body } = e.target;

    const newPost = {
      title:title.value,
      body:body.value
    }
axios.patch(`http://localhost:3000/posts/${postId}`,newPost)
.then(res => getUser())
.finally(()=>setEdit(null))
  }
  
  return (
    <div className='Server'>
      <form className='sign' onSubmit={handleSubmit}>
        <input type="text" placeholder='title' name='title' required />
        <input type="number" placeholder='userId' name='userId' max={10} min={1} required />
        <textarea name="body" id="body" cols="30" rows="5" required></textarea>
        <input className='btn' type="submit" value="save post" />
      </form>
      <div>
        <div className="Server__posts">
          {
            currentSlice.map(elem => {
              return (
                <div key={elem.id}>

                  {
                    (edit===elem.id) ? (
                      <form className='forma' onSubmit={(e)=>changePost(e,elem.id)}>
                        <textarea name="title" id="title" cols="25" rows="2"defaultValue={elem.title} ></textarea>
                        <textarea name="body" id="body" cols="30" rows="4"  defaultValue={elem.body}></textarea>
                        <button onClick={()=>setEdit(null)} className='forma__cancel'>Cancel</button>
                        <button className='forma__save'>Save</button>
                        </form>
                    ) : (
                      <>
                        <h2>{elem.title}</h2>
                        <p>{elem.body}</p>
                        <button className='delete' onClick={() => deletUser(elem.id)}>X</button>
                        <button className='edit' onClick={(e) => editUserId(e,elem.id)} >
                          <i className="bi bi-pencil"></i>
                          </button>
                      </>
                    )
                  }

                </div>

              )
            })
          }



        </div>
        {
          user.length <= 6 ?
            null
            : <JsonPaginate
              className='JsonPaginate'
              nextLabel="next"
              onPageChange={handlePageClick}
              pageCount={Math.ceil(user.length / perPage)}
              previousLabel="prev"
              renderOnZeroPageCount={null}
            />
        }
      </div>

    </div>
  )
}
