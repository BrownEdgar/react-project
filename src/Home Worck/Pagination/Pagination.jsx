import React, { useState, useEffect } from 'react'
import MyLoader from './MyLoader'
import './Pagination.scss'
import SelectPage from './SelectPage/SelectPage'
export default function Pagination() {
    const [comment, setComment] = useState([])
    const [page, setPage] = useState(1)
    const [perpage, setPerpage] = useState(1)
    const [loading, setLoading] = useState(true)
    const x = page * perpage
    const currentSlice = comment.slice(x - perpage, x)

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/comments?_limit=100')
            .then(res => res.json())
            .then(data => setComment(data))
            .finally(setTimeout(setLoading,800,false))
    }, [])

    const setPageBtn = (n) => setPage(n)
    return (
        <div className='Pagination'>
            <h1 className='title'>Pagination Components</h1>
            {loading
                ? <div className='comment'><MyLoader className='Loader'/></div>
                : (
                    currentSlice.map(elem => {
                        const x = elem.name.indexOf(' ')
                        const name = elem.name.slice(0, x)
                        return (
                            <div key={elem.id} className='comment'>
                                <li className='comment__name'>{elem.id} {name}</li><hr />
                                <p className='comment__body'>{elem.body}</p>
                            </div>
                        )
                    })
                )

            }
            <SelectPage setPageBtn={setPageBtn} total={100} perpage={perpage} page={page} />
        </div>
    )
}
