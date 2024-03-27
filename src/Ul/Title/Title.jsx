import React from 'react'
import './Title.scss'

export default function Title({as='h1', title,classList,variant,align}) {
  const Element = as
  return (
    <Element className={`Title  Title-${variant} Title-${align}`  }>
   {title || "defaeult title"}
   </Element>
  )
}
