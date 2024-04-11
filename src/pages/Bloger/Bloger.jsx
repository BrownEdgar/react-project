import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import './Bloger.scss'
import axios from 'axios';
import moment from 'moment';
import ROUTES from '../../routes'
import ClapIcon from './ClapIcon';

export default function Bloger() {
  const { id } = useParams()
  const { state } = useLocation();
  const [topBlogs, setTopBlogs] = useState([])

  useEffect(() => {
    axios('http://localhost:3000/blogs?_limit=6')
      .then(res => setTopBlogs(res.data))
  }, [])


  return (
    <div className='Bloger'>
      <div className="Bloger__poster">
        <h1> BLOG N {id}</h1>
      </div>
      <section className='Bloger__wrapper'>
        {
          state ? (
            <div className='main__blog'>
              <h1 className='main__blog-title'>{state.title}</h1>
              <img src={state.poster} alt="" />
              <div >
                <p className='main__blog-paragraph'>{state.descOne}</p>
                <p className='main__blog-paragraph'>{state.descTwo}</p>

                <ul className='main__blog-list'>
                  {
                    state.list.map((elem, index) => {
                      return <li key={index}>{elem}</li>
                    })
                  }
                </ul>
                <p className='main__blog-paragraph'>{state.descThree}</p>
                <hr />
                <div className='main__blog-footer'>
                  <ClapIcon />
                  <span>
                    {state.claps}
                  </span>
                </div>
              </div>
            </div>
          ) : <div>Not Found</div>
        }
        <div className='top__blogs'>
          {topBlogs.map(blog => {
            return (
              <Link key={blog.id} to={`${ROUTES.BLOG}/${blog.id}`} state={blog}>
                <img src={blog.poster} />
                <div>
                  <h2>{blog.title}</h2>
                  <p className='date'>
                    <i class="bi bi-calendar-fill"></i>
                    <span>
                      {moment(blog.date).fromNow()}
                    </span>
                  </p>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
