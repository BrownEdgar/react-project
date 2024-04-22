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
            return <li key={elem.id}>{elem.title}</li>
          })
        }
    </div>
  )
}
