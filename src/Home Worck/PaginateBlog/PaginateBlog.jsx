import React, { useState } from 'react'
import './PaginateBlog.scss'
import ReactPaginate from 'react-paginate';
import Spinner from './Spinner.svg'

export default function PaginateBlog() {
    const [blog, setBlog] = useState(
        [
            {
                id: 1,
                poster: 'https://getshogun.com/wp-content/uploads/2022/10/The-benefits-of-building-headless-sites-using-React-vs-Vue_v1.jpeg',
                title: 'Vue.js vs React - How to Choose the Right Fromeworck',
                desc: 'In this post, we take a look at digital customer exeperience and the role that DXPs play in building engaging digital customer.',
                avatar: 'https://res.cloudinary.com/jerrick/image/upload/v1675407054/63dcaecebb978e001e37ca8d.jpg',
                date: 'Jun 1, 2022'
            },
            {
                id: 2,
                poster: 'https://media.graphassets.com/IbeToNAYSOWKE4CQeTvL',
                title: 'What is Omnichannel eCommerce',
                desc: 'Omnichannel commerce is a multi-faceted approach to sales that is focused on providing seamless customer experiences across multiple channels.',
                avatar: 'https://sammyplaysdirty.com/wp-content/uploads/2017/06/user-avatar-pic3.jpg',
                date: 'May 30, 2022'
            },
            {
                id: 3,
                poster: 'https://hygraph.com/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FM43dL92HR1eOEXLhaXC9&w=1200&q=75',
                title: "What's the difference betwen Gatsby and Next.js",
                desc: 'Gatsby is for creating static websites with infrequent content changes, while NextJS is useful for building complicated sites with high server interaction.',
                avatar: 'https://forumine.com/download/file.php?avatar=54_1519777959.jpg',
                date: 'May 15, 2022'
            },
            {
                id: 4,
                poster: 'https://www.thedigitalleadershipforum.com/wp-content/uploads/2023/08/https___cdn.evbuc_.com_images_555130349_1390597818093_1_original.jpg',
                title: 'What is Digital Customer Exerience?',
                desc: 'inseparable from the all-encompassing customer experience (CX), which includes in-store and other interactions in the physical world. ',
                avatar: 'https://res.cloudinary.com/jerrick/image/upload/v1675407054/63dcaecebb978e001e37ca8d.jpg',
                date: 'Mar 16, 2022'
            },
            {
                id: 5,
                poster: 'https://media.graphassets.com/7jJfP0OWQSLdeOQyoHmK',
                title: 'Authentication Patterns with Next.js',
                desc: 'As a full-stack framework, Next. js is more flexible when it comes to authentication than React, where authentication takes place only on the client-side.',
                avatar: 'https://res.cloudinary.com/jerrick/image/upload/v1675407054/63dcaecebb978e001e37ca8d.jpg',
                date: 'Mar 21, 2022'
            },
            {
                id: 6,
                poster: 'https://media.graphassets.com/cJXvdB15ToaBhxMjUfVa',
                title: 'The Difference between Next.js and React?',
                desc: 'Next JS offers server-side rendering (SSR), whereas Create React App offers client-side rendering, improving the application performance',
                avatar: 'https://res.cloudinary.com/jerrick/image/upload/v1675407054/63dcaecebb978e001e37ca8d.jpg',
                date: 'Mar 22, 2022'
            },
            {
                id: 7,
                poster: 'https://media.graphassets.com/M43dL92HR1eOEXLhaXC9',
                title: "What's the difference between Gatsby and Next.js",
                desc: ' Next. js is preferable for more complex web applications that require server-side rendering, dynamic data, and back-end APIs.',
                avatar: 'https://res.cloudinary.com/jerrick/image/upload/v1675407054/63dcaecebb978e001e37ca8d.jpg',
                date: 'Mar 15, 2022'
            },
            {
                id: 8,
                poster: 'https://www.thedigitalleadershipforum.com/wp-content/uploads/2023/08/https___cdn.evbuc_.com_images_555130349_1390597818093_1_original.jpg',
                title: 'What is Digital Customer Experience',
                desc: ' inseparable from the all-encompassing customer experience (CX), which includes in-store and other interactions in the physical world.',
                avatar: 'https://res.cloudinary.com/jerrick/image/upload/v1675407054/63dcaecebb978e001e37ca8d.jpg',
                date: 'Mar 16, 2022'
            }
        ]
    )
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(3)
    const [loading, setLoading] = useState(true)

    setTimeout(setLoading,1000, false)

    const x = page * perPage
    const currentSlice = blog.slice(x - perPage, x)

    const handlePageClick = ({ selected }) => {
        setPage(selected + 1)
    }
    return (
        <>
            <h1 className='title'>Blog</h1>
            <div className='PaginateBlog'>

                {  
                    currentSlice.map(elem => {
                        return   loading ? <div className='PaginateBlog__box'><img  src={Spinner} /></div>
                        : (
                            <div key={elem.id} className='PaginateBlog__box'>
                                <img src={elem.poster} />
                                <h3>{elem.title}</h3>
                                <p>{elem.desc}</p>
                                <div className='avatar' >
                                    <img src={elem.avatar} />
                                    <p>{elem.date}</p>
                                    <button>Read post</button>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <ReactPaginate
                className='Paginate'
                nextLabel="next"
                onPageChange={handlePageClick}
                pageCount={Math.ceil(8 / perPage)}
                previousLabel="prev"
                renderOnZeroPageCount={null}
            />
        </>
    )
}
