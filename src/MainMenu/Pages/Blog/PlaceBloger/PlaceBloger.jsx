import axios from 'axios'
import React,{useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './PlaceBloger.scss'

export default function PlaceBloger() {
  const [sight, setSight] = useState({})
    const {id} = useParams()
    useEffect(() => {
      axios(`http://localhost:5172/profile/${id}`)
      .then(res=>setSight(res.data))
    }, [])
  return (
    <div className='PlaceBloger'>
     <img src={sight.img} />
     <div className='description'>
      <h1>{sight.name}</h1>
      <p>{sight.desc}</p>
     </div>
    </div>
  )
}
