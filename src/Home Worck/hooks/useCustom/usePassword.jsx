import React, { useState } from 'react'

export default function usePassword(length) {
    const [password, setPassvord] = useState('')
    
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'u', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'U', 'Z']
   const generateCode = ()=>{
    const azar = []
       for (let i = 0; i < 15; i++) {
           const randomNumber = Math.round(Math.random() * arr.length)
           const x = arr.at(randomNumber)
          azar.push(x)
       }
       const text =  azar.join('')
       return setPassvord(text)
       
   }
   
    return (
        [password , {generateCode}]
      )
    }