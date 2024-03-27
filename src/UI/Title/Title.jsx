import React from 'react'
import './Title.scss'

export default function Title({ as = 'h1', title = "No title", classList, size, color, align }) {
    const Element = as;
    return (
        <Element className={`Title ${classList ? classList : ''} Title-${color}`}>
            {title}
        </Element>
    )
}
