import React, { useContext } from 'react';
import { MyContext } from './App';
export default function C() {
    const todos = useContext(MyContext);
    return (
        <div>
        {todos.map(elem => {
                return (
                    <div key={elem.id}>
                        <h3>{elem.id}</h3>
                        <p>{elem.title}</p>
                    </div>
                )
            })}
    </div>
    )
}

