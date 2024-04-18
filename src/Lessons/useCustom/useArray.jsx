import React, { useState, useEffect } from 'react';
// { quantity: 17, min: 40, max: 162 }

export default function useArray({ quantity, min, max }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const arr = Array.from({ length: quantity }, () => Math.round(Math.random() * (max - min) + min))
    console.log(arr)
    setData(arr)
  }, [quantity])

  const getSum = () => {
    const sum = data.reduce((acc, cv) => acc + cv, 0);
    return sum;
  }

  return [data, { getSum }]
}
