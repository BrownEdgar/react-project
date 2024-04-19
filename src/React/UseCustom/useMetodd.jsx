import React, { useEffect, useState } from 'react'


export default function useArray({firstValue, min, max}) {
    const [data, setData] = useState([])

    useEffect(() => {
        const arr = Array.from({ length: firstValue}, () => Math.round(Math.random() * (max-min) +min))
        console.log(arr);
        setData(arr)
    }, [firstValue])
    const sum = data.reduce((acc,cv)=> acc+cv,0)
    const pass = Math.random().toString(30).slice(2)
    return [data,{sum, pass}]
}
