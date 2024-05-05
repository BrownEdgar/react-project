import React ,{ useState } from 'react';
import './Select.scss'

export default function Select() {
    const [post, setPost] = useState([
        { id: 1, name: 'A' },
        { id: 2, name: 'B' },
        { id: 3, name: 'C' },
        { id: 4, name: 'D' },
        { id: 5, name: 'E' }
    ])
    const [count, setCount] = useState(null)
    
   const handleClick = (idCount)=>{
setCount(idCount)
   }
    return (
        <div className='Select '>
            <ul className='nav'>
            {
                post.map(elem => {
                    return <li onClick={ ()=>handleClick(elem.id)} className={elem.id===count?'active':''} key={elem.id}>{elem.name}</li>
                })
            }
            </ul>
            
            <ul className='display'>
            {
                count?(post.map(elem=>{
                    if (elem.id===count) {
                        return <li>{elem.name}</li>
                    }
                }))
                : (
                    <li>...</li>
                )
                
            }
            </ul>

        </div>
    )
}
