import React,{useEffect,useReducer} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './Posts.scss'


export default function Posts() {
    const reducer = (state, action) => {
        switch (action.type) {
          case "add-post": return action.payload;
          default:return state;
        }
      };
    const [state, dispatch] = useReducer(reducer, []);

    useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts')
    .then(res => dispatch({type:'add-post',payload:res.data}))
    }, [])
  return (
    <div className='Posts'>
        {
            state.map(elem=>{
                return <Link to={
                    {pathname:`${elem.id}`}
                } className='Posts__link' key={elem.id}>{elem.title}</Link>
            })
        }
    </div>
  )
}
