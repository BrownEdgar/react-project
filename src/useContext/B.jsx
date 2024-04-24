import React , {useContext} from 'react'
import C from './C'
import {MyContext} from './App'

export default function B() {
  const Value = useContext(MyContext)
  return (
    <div className='B'>
        <C/>
        {
          Value.map((elem)=>{
            return <ul key={elem.userId}>{elem.title}</ul>
          })
        }
    </div>
  )
}