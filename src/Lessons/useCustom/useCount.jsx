import React, { useState } from 'react'

export default function useCount({ initialValue, min, max }) {
  const [value, setValue] = useState(initialValue);

  const minus = () => setValue(value > min ? value - 1 : value)
  const plus = () => setValue(value < max ? value + 1 : max)
  const addRandom = () => setValue(value < max ? value + Math.ceil(Math.random() * 10) : max)

  return (
    [value, { minus, plus, addRandom }]
  )
}
