import React,{useState,useEffect} from 'react'
import './App.scss'
import axios from 'axios'
import {nanoid} from 'nanoid'
import JsonPaginate from 'react-paginate';


export default function Server() {
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(6)

    const x = page * perPage
    const currentSlice = posts.slice(x - perPage, x)

    const handPageClick = ({ selected }) => {
        setPage(selected + 1)
    }

    const User = () =>{
        axios('http://localhost:3000/posts')
        .then(res=>setPosts(res.data))
    }
    useEffect(() => {
      User()
    }, [])

    const Submit = (e) => {
        e.preventDefault()
        const { title, userId, body } = e.target;
    
        const isExists = posts.some(post => post.title.toLowerCase() === title.value.toLowerCase())
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
            User();
            e.target.reset()
          })
          .catch(err => console.log(err))
      }
     
  return (
    <div className='App'>
        <form className='submit' onSubmit={Submit}>
        <input type="text" placeholder='title' name='title' required />
        <input type="number" placeholder='userId' name='userId' max={10} min={1} required />
        <textarea name="body" id="body" cols="30" rows="5" required></textarea>
        <input className='btn' type="submit" value="save post" />
      </form>
        <div>
        <div className="App__posts">
        { 
            posts.length<=6
            ?posts.map(elem => {
            return (
              <div key={elem.id}>
                <h2>{elem.title}</h2>
              </div>
            )})
            :currentSlice.map(elem => {
                return (
                  <div key={elem.id}>
                    <h2>{elem.title}</h2>
                  </div>
                )})
        }


            
      </div>
      {      
                posts.length<=6?
                null
                : <JsonPaginate
                breakLabel='.'
                nextLabel="next >"
                onPageChange={handPageClick}
                pageRangeDisplayed={null}
                pageCount={Math.ceil(posts.length/perPage)} 
                previousAriaLabel=' prev'
                className='navigation'
                renderOnZeroPageCount={null}
                />


            } 
        </div>
      
    </div>
  )
}


    
