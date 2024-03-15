import React from 'react'
import './App.scss'

export default function App() {
    const [Arr, setArr] = React.useState([
        {
            id: 1,
            title: "Java Script",
            info: "JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.",
            images: './photos/java-script.jpg'
        },
        {
            id: 2,
            title: "HTML",
            info: "HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.",
            images: './photos/html.jpg'
        },
        {
            id: 3,
            title: "CSS",
            info: "Cascading Style Sheets (CSS) is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).",
            images: './photos/css.jpg'
        }
    ])
    return (
        <div className='App'>
            {
                Arr.map(elem => {
                    return (
                        <div key={elem.id} className='App__leng'>
                            <img src={elem.images} alt="" />
                            <div>
                                <h1>{elem.title}</h1>
                                <p>{elem.info}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
