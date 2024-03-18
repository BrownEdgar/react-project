import React, { useEffect, useState } from 'react'
import '../Users/Users.scss'
export default function Users() {
    const [user, setUser] = useState({})
    const [count, setCount] = useState(1)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
            .then(users => users.json())
            .then(user => setUser(user))
    }, [count])
    const next = () => {
        setCount(count < 10 ? count + 1 : 10)
    }
    const prev = () => {
        setCount(count > 2 ? count - 1 : 1)
    }
    const copy = (email) => {
        navigator.clipboard.writeText(email)
    }
    return (
        <div className='Users'>
            <button onClick={prev}><i className="bi bi-arrow-bar-left"></i></button>
            <div className='Users__user'>
                <h1>Name : {user.name}</h1>
                <h2><em>Email</em> : {user.email}<i onClick={() => copy(user.email)} className="bi bi-copy"></i></h2>
            </div>
            <button onClick={next}><i className="bi bi-arrow-bar-right"></i></button>
        </div>
    )
}
