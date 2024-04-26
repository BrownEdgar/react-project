import React from 'react'
import { useSelector } from 'react-redux'
import { getAllTodos } from '../../features/todos/todosSlice'

export default function todos() {
    const todos = useSelector(getAllTodos)
    console.log('todos:', todos);
    return (
        <div>{
            todos.map(elem => {
                return (
                    <div key={elem.id}>
                        <h3>{elem.title}</h3>
                    </div>
                )
            })}</div>
    )
}
