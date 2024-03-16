import React, { useState, useEffect } from 'react';
import './Quotes.scss'


export default function Quotes() {
  const [quote, setQuote] = useState({});
  const [quoteNumber, setQoteNumber] = useState(1)

  useEffect(() => {

    fetch(`https://dummyjson.com/quotes/${quoteNumber}`)
      .then(res => res.json())
      .then(data => setQuote(data));

  }, [quoteNumber])

  const next = () => setQoteNumber(quoteNumber < 100 ? quoteNumber + 1 : 100)
  const prev = () => setQoteNumber(quoteNumber > 2 ? quoteNumber - 1 : 1)

  return (
    <div className='Quotes'>
      <h1>Quotes</h1>
      <div className="Quotes__item">
        <h1>{quote.quote}</h1>
        <h3>{quote.author}</h3>
      </div>
      <div className="Quotes__buttons">
        <button>
          <i className="bi bi-arrow-left" onClick={prev}></i>
        </button>
        <button>
          <i className="bi bi-arrow-right" onClick={next}></i>
        </button>
      </div>
    </div>
  )
}
