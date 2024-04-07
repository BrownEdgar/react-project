import React,{useState} from 'react'
import './Bloger.scss'
import {Link, useParams } from 'react-router-dom'

export default function Bloger() {
    const [bloger, setBloger] = useState([
        {
            id: 1,
            poster: 'https://impreza3.us-themes.com/wp-content/uploads/2016/01/blog-1-721x479.jpg',
            title: 'Satisfaction Lies In The Effort',
            descOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla suctus. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.',
            descTwo: 'Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla luctus. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.',
            list: [
                'This is a unorder list. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo.',
                'Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla luctus.',
                'Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.'
            ],
            descThree: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla luctus. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.',
        },
        {
            id: 2,
            poster: 'https://impreza3.us-themes.com/wp-content/uploads/2016/01/blog-2-721x481.jpg',
            title: 'This Is A Text Post',
            descOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla suctus. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.',
            descTwo: 'Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla luctus. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.',
            list: [
                'This is a unorder list. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo.',
                'Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla luctus.',
                'Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.'
            ],
            descThree: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla luctus. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.',
        },
        {
            id: 3,
            poster: 'https://impreza3.us-themes.com/wp-content/uploads/2016/01/blog-3-721x481.jpg',
            title: 'Imagination Encircles The World',
            descOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla suctus. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.',
            descTwo: 'Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla luctus. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.',
            list: [
                'This is a unorder list. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo.',
                'Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla luctus.',
                'Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.'
            ],
            descThree: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla luctus. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.',
        },
        {
            id: 4,
            poster: 'https://impreza3.us-themes.com/wp-content/uploads/2016/01/blog1300-721x481.jpg',
            title: 'Post With Some Text And Image',
            descOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla suctus. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.',
            descTwo: 'Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla luctus. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.',
            list: [
                'This is a unorder list. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo.',
                'Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla luctus.',
                'Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.'
            ],
            descThree: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla luctus. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.',
        },
        {
            id: 5,
            poster: 'https://impreza3.us-themes.com/wp-content/uploads/2016/01/blog-11-600x400.jpg',
            title: 'Enjoy The Weather',
            descOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla suctus. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.',
            descTwo: 'Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla luctus. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.',
            list: [
                'This is a unorder list. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo.',
                'Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla luctus.',
                'Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.'
            ],
            descThree: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla luctus. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.',
        },
        {
            id: 6,
            poster: 'https://impreza3.us-themes.com/wp-content/uploads/2016/01/blog-5-721x481.jpg',
            title: 'Interesting Inventions',
            descOne: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla suctus. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.',
            descTwo: 'Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla luctus. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.',
            list: [
                'This is a unorder list. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo.',
                'Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla luctus.',
                'Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.'
            ],
            descThree: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, sem quis lacinia faucibus, orci ipsum gravida tortor, vel interdum mi sapien ut justo. Nulla varius consequat magna, id molestie ipsum volutpat quis. Suspendisse consectetur fringilla luctus. Fusce id mi diam, non ornare orci. Pellentesque ipsum erat, facilisis ut venenatis eu, sodales vel dolor.',
        }
    ])
    const {id} = useParams()
  return (
    <div className='Bloger'>
        <div className='active'>
            {
                bloger.map(elem=>{
                    if (elem.id===+id) {
                        return <div key={elem.id}>
                            <h1>{elem.title}</h1>
                            <img src={elem.poster} alt="" />
                            <p>{elem.descOne}</p>
                            <p>{elem.descTwo}</p>
                            <p>{elem.descThree}</p>
                            <ul>
                                {elem.list.map(el=>{return <li key={el}>{el}</li>})}
                            </ul>
                            <p>{elem.descOne}</p>

                        </div>
                    }
                })
            }
        </div>
        <div className='blog-nav'>
            {
                bloger.map(elem=>{
                    return <Link className='link' key={elem.id} to={`../blog/${elem.id}`}>
                        <img src={elem.poster} alt="" />
                        <h3>{elem.title}</h3>
                    </Link>
                })
            }
        </div>

    </div>
  )
}
