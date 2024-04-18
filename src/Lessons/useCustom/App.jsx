import React from 'react'
import useCount from './useCount'
import useArray from './useArray'

export default function App() {
  const [count, { minus, plus, addRandom, }] = useCount({ initialValue: 9, min: 8, max: 15 })

  return (
    <div>

      <button onClick={minus}>MINUS</button>
      <button onClick={plus}>PLUS</button>
      <button onClick={addRandom}>ADD RANDOM</button>
    </div>
  )
}
