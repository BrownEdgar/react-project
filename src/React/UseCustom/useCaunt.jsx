import React, { useState } from 'react'

export default function useCaunt({ firstValue, min, max }) {
  const [value, setValue] = useState(firstValue)
  const minus = () => setValue(value > min ? value - 1 : value)
  const plus = () => setValue(value < max ? value + 1 : max)
  const random = () => setValue(value < (max - 10) ? value + Math.ceil(Math.random() * 10) : max)
  const zero = () => setValue(0)
  return (
    [value, { minus, plus, random, zero }]
  )
}
