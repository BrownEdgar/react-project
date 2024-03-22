import React from 'react'
import '../SelectPage/SelectPage.scss'

export default function SelectPage({total,page,perpage,setPageBtn}) {
  const list = []
  for (let i = 1; i < Math.ceil(total/perpage); i++) {
    list.push(i)
  }
  return (
    <div className='SelectPage'>
      <ul>
        {
          list.map(item =>{
            return <li className={`${item===page? 'active' : ''}`} key={item}>
              <a href="#" onClick={()=>setPageBtn(item)}>{item}</a>
            </li>
          })
        }
      </ul>
      
    </div>
  )
}
