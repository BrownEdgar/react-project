import React, { useState, useEffect, createContext } from 'react';
import C from "./C"
export const MyContext = createContext();

export default function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }, []);

    return (
        <div>
            <MyContext.Provider value={todos}>
                <C />
            </MyContext.Provider>

        </div>
    );
}



