import React, { useState, useEffect } from 'react';
import './App.scss'
import axios from 'axios';
import ReactPaginate from 'react-paginate';

export default function App() {
  const [users, setusers] = useState([])
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(10)

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(import.meta.env.VITE_DB_URL)
      setusers(response.data);
    }
    fetchData()
  }, [])

  const handlePageClick = (option) => {
    setPage(option.selected + 1)
  }
  const x = (page * perPage)
  const currentSlice = users.slice(x - perPage, x)

  return (
    <div className='App'>
      <div className="App__Users">
        {currentSlice.map(elem => {
          return (
            <div key={elem.id}>
              
              <h2>
                {elem.first_name}
                {' '}
                {elem.last_name}
                {''}
                {elem.email}
                {''}
                {elem.ip_address}
              </h2>
            </div>
          )
        })}
      </div>
      <ReactPaginate
        breakLabel="."
        nextLabel="next>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={Math.ceil(40/ perPage)}
        previousLabel="<previous"
        renderOnZeroPageCount={null}
        className='App__navigation'
      />
    </div>
  )
}