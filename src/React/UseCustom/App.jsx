import React, { useState } from 'react'
import useCaunt from './useCaunt'
import useMetod from './useMetodd'

export default function useMatodd() {
  const [caunt, { minus, plus, random, zero }] = useCaunt({ firstValue: 0, min: -10, max: 100 })
  const [data,{ sum,pass }] = useMetod({ firstValue: 20, min: 50, max: 199 })
  return (
    <div><h1>Number {caunt}</h1>
      <button onClick={minus}>MINUS</button>
      <button onClick={random}>ADD RANDOM</button>
      <button onClick={plus}>PLUS</button>
      <button onClick={zero}>RESET</button>
      <h3>arr {data}</h3>
      <h2>sum arr {sum}</h2>
      <p> Password {pass}</p>
    </div>
  )
}
