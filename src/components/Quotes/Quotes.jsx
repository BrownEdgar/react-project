import React, { useState, useEffect } from 'react';
import CircleLoader from '../Loaders/CircleLoader/CircleLoader'
import './Quotes.scss'

export default function Quotes() {
  const [quote, setQuote] = useState([]);
  const [quoteNumber, setQoteNumber] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch(`https://dummyjson.com/quotes`)
      .then(res => res.json())
      .then(data => setQuote(data.quotes))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    setLoading(true);
    setTimeout(setLoading, 300, false)
  }, [quoteNumber])


  const handleLike = (quoteId) => {
    const result = quote.map(elem => {
      if (elem.id === quoteId) {
        elem.like = !elem.like;
      }
      return elem;
    })
    setQuote(result)
  }

  const next = () => setQoteNumber(quoteNumber < 29 ? quoteNumber + 1 : 29)
  const prev = () => setQoteNumber(quoteNumber > 1 ? quoteNumber - 1 : 1)
  const currentQoute = quote[quoteNumber];

  return (
    <div className='Quotes'>
      <h1>Quotes</h1>
      <div className="Quotes__item">
        {
          loading ? (
            <CircleLoader />
          ) : (
            <>
              <h1 className={`${currentQoute?.quote.length > 85 ? 'Quotes__sm' : ''}`}>{currentQoute.quote}</h1>
              <h3 className='Quotes__author'>{currentQoute.author}</h3>
              <span
                className='Quotes__icon Quotes__icon-like'
                onClick={() => handleLike(quote[quoteNumber].id)}>
                {
                  (quote[quoteNumber].like)
                    ? <i className="bi bi-hand-thumbs-up-fill"></i>
                    : <i className="bi bi-hand-thumbs-up"></i>
                }
              </span>
            </>
          )
        }


      </div>
      <div className="Quotes__buttons">
        <button onClick={prev}>
          <i className="bi bi-arrow-left"></i>
        </button>
        <button onClick={next}>
          <i className="bi bi-arrow-right" ></i>
        </button>
      </div>
    </div>
  )
}
