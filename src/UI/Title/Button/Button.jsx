import React from 'react'
import './Button.scss'
export default function Button({ as = 'button', title = "No title", classList, size, form, align, onclick }) {
  const Element = as;
  return (
    <Element className={`custom-btn btn-10 ${classList ? classList : ''} Button-${form}`}
      onClick={onclick}>
      {title}
    </Element>
  )
}