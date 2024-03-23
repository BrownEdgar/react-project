import React, { useState, useEffect } from 'react';
import './App.scss'
import Pagination from '../../components/Pagination/Pagination';
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


  const setPages = (n) => setPage(n);
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
      <Pagination total={100} perpage={perPage} setPages={setPages} page={page} />
    </div>

  )
}
