import React, { useState } from 'react'
import '../DevCategories/DevCategories.css'
export default function DevCategories() {
  const [lang, setLang] = useState([
    {
      title: 'HTML',
      body: 'HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. ',
      img: 'https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-html/sta-je-html.jpg'
    },
    {
      title: 'CSS',
      body: 'Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).',
      img: 'https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg'
    },
    {
      title: 'JavaScript',
      body: 'JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.',
      img: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg'
    }
  ])
  return (
    <div className='DevCategories'>
      <h1>Categories</h1>
      {
        lang.map(elem => {
          return (
            <div key={elem.title} className='lang'>
              <img src={elem.img} alt="" />
              <div><h1>{elem.title}</h1>
                <p>{elem.body}</p></div>
            </div>
          )
        })
      }
    </div>
  )
}
