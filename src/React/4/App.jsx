import React, { useState, useEffect } from 'react'
import './App.scss'

export default function App() {
    const [users, setUsers] = useState({})
    const [number, setNumber] = useState(1)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${number}`)
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [number])
    const next = ()=> setNumber(number < 10 ? number +1 :10)
    const prev = ()=> setNumber(number > 2 ? number - 1 : 1)
    const copy = () => {
        const emailElement = document.querySelector('.Users__info h2');
        const emailText = emailElement.innerText;
        navigator.clipboard.writeText(emailText)   
    };
    return (
        <div className='Users'>
            <h1>User</h1>
            <div className='Users__info'>
                <h1>{users.name}</h1>
                <h2>{users.email}</h2> 
                <button onClick={copy}>Copy Email</button>
            </div>
            <div className='Users__buttons'>
                <button><i class="bi bi-arrow-left-circle-fill" onClick={prev}></i></button>
                <button><i class="bi bi-arrow-right-circle-fill" onClick={next}></i></button>
            </div>
        </div>
    )
}
