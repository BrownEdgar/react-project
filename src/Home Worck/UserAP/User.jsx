import React, {useState, useEffect} from 'react';
import './User.scss'
import axios from 'axios';
import ReactPaginate from 'react-paginate'

export default function User() {
 const[user, setUser] = useState([])
 const [page,setPage] = useState(1)
 const[perPage, setPerPage] = useState(10)

 useEffect(()=>{
   axios('http://localhost:3000/users')
   .then(res => setUser(res.data))
 },[])

 const handlePageClick =(n) => {
  setPage(n.selected + 1)

 }

 const x = (page * perPage)
 const currentSlice = user.slice(x - perPage, x)

  return (
    <div className='User'>
    <div className="users"> 
     {currentSlice.map(elem => {
      return <ul key={elem.id}>
        <li>FirstName : {elem.first_name}</li>
        <li>LastName : {elem.last_name}</li>
      </ul>
     })}
    </div>
    <ReactPaginate
    className='paginate'
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageCount={Math.ceil(user.length / perPage)}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />

    </div>
  )
}