import { useContext } from 'react'
import { MyContext } from './contexts/Contexts'



export default function C() {
  console.log('C render')
  const value = useContext(MyContext)
  return (
    <div>
      <h1>Component C</h1>
      <p>
        <mark>
          value: {JSON.stringify(value)}
        </mark>
      </p>
      <button onClick={value.foo}>PLUS</button>
    </div>
  )
}
