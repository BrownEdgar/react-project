import React, { useState } from 'react'

export default function usePassword(length) {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'u', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'U', 'Z']
    const randomNumber = Math.round(Math.random() * arr.length)
    const x = arr.at(randomNumber)
    const [password, setPassvord] = useState([])
    const generateCode = () =>{
        for (let i = 0; i <length; i++) {
            setPassvord([...password ,x])
        }
    } 
    return (
        [password , {generateCode}]
      )
    }