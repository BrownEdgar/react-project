import React, { useState, useEffect } from 'react';
import './App.scss'
s
import ReactPaginate from 'react-paginate';
import CircleLoader from '../../components/Loaders/CircleLoader/CircleLoader'


export default function App() {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(false)
  const [perPage] = useState(5)
  const [page, setPage] = useState(5)

  useEffect(() => {
    const x = (page * perPage) - perPage;
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${perPage}&_start=${x}`)
      .then(res => res.json())
      .then(data => setQuotes(data))
      .finally(() => setLoading(false))
  }, [perPage, page])


  const handlePageClick = ({ selected }) => {
    console.log(selected)
    setPage(selected + 1)
  }

  return (
    <div className="App">
      <div className='quotes'>
        {loading ? <CircleLoader /> : null}
        {
          quotes.map(elem => {
            return (
              <div key={elem.id} className='quotes-block'>
                <span>{elem.id} </span>
                <h2>{elem.title}</h2>
                <p>{elem.body}</p>
              </div>
            )
          })
        }
      </div>
      {/* <Pagination total={100} perpage={perPage} setPages={setPages} page={page} /> */}
      <div className='Pagination'>
        <ReactPaginate

          breakLabel="..."
          nextLabel={<button ><i class="bi bi-arrow-bar-right"></i></button>}
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={Math.ceil(100 / perPage)}
          previousLabel={<i class="bi bi-arrow-bar-left"></i>}
          className='navigation'
          renderOnZeroPageCount={null}
          initialPage={10}

        />
      </div>
    </div>

  )
}
