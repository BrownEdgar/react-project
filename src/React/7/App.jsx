import React, { useState } from 'react';
import './App.scss';
import ReactPaginate from 'react-paginate';

export default function App() {
    const [arr] = useState([
        {
            id: 1,
            poster: './photos7/1.png',
            title: 'Vue.js vs React - How to Choose the Right Framework',
            desc: 'In this post, we take a look at digital customer experience and the role that DXPs play in building engaging digital customer experiences.',
            avatar: './photos7ava/1.jpg',
            date: 'Jun 1, 2022'
        },
        {
            id: 2,
            poster: './photos7/2.png',
            title: 'What is Omnichannel eCommerce?',
            desc: 'In this post, we take a look at digital customer experience and the role that DXPs play in building engaging digital customer experiences.',
            avatar: './photos7ava/2.jpg',
            date: 'May 30, 2022'
        },
        {
            id: 3,
            poster: './photos7/3.png',
            title: 'Whats the difference between Gatsby and Next.js',
            desc: 'In this post, we take a look at digital customer experience and the role that DXPs play in building engaging digital customer experiences.',
            avatar: './photos7ava/3.jpg',
            date: 'May 16, 2022'
        },
        {
            id: 4,
            poster: './photos7/4.png',
            title: 'What is Digital Customer Experience?',
            desc: 'In this post, we take a look at digital customer experience and the role that DXPs play in building engaging digital customer experiences.',
            avatar: './photos7ava/4.jpg',
            date: 'Nov 25, 2022'
        },
        {
            id: 5,
            poster: './photos7/5.png',
            title: 'Authentication Patterns with Next.js',
            desc: 'In this post, we take a look at digital customer experience and the role that DXPs play in building engaging digital customer experiences.',
            avatar: './photos7ava/5.jpg',
            date: 'March 25, 2022'
        },
        {
            id: 6,
            poster: './photos7/6.png',
            title: 'The Difference between Next.js and React',
            desc: 'In this post, we take a look at digital customer experience and the role that DXPs play in building engaging digital customer experiences.',
            avatar: './photos7ava/6.jpg',
            date: 'March 25, 2022'
        },
        {
            id: 7,
            poster: './photos7/7.png',
            title: 'Whats the difference between Gatsby and Next.js',
            desc: 'In this post, we take a look at digital customer experience and the role that DXPs play in building engaging digital customer experiences.',
            avatar: './photos7ava/7.jpg',
            date: 'Jun 25, 2022'
        },
        {
            id: 8,
            poster: './photos7/8.png',
            title: 'What is Digital Customer Experience?',
            desc: 'In this post, we take a look at digital customer experience and the role that DXPs play in building engaging digital customer experiences.',
            avatar: './photos7ava/8.jpg',
            date: 'Dec 20, 2022'
        }
    ]);

    const [currentPage, setCurrentPage] = useState(0);
    const perPage = 3;
    const x = currentPage * perPage;
    const newArr = arr.slice(x, x + perPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    return (
        <div className='Container'>
            <h1>Blog</h1>
            {newArr.map(elem => (
                <div key={elem.id} className='Container__block'>
                    <div className='Container__block__img'><img src={elem.poster} alt={elem.title} /></div>
                    <h2>{elem.title}</h2>
                    <p>{elem.desc}</p>
                    <div className='Container__block__user'>
                        <img className='Container__block__user__ava' src={elem.avatar} alt="Avatar" />
                        <p>{elem.date}</p>
                        <button>Read Post</button>
                    </div>
                </div>
            ))}
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageCount={Math.ceil(arr.length / perPage)}
                previousLabel="< previous"
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        </div>
    );
}
