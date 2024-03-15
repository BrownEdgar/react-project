import { useState } from 'react'
import './App.css'


export default function App() {
  const [data,setdata] = useState([
    {
      id:1,
      title:'HTML 5',
      image: './images/Html.jpg.png',
      desc: 'HTML5 includes detailed processing models to encourage more interoperable implementations; it extends, improves, and rationalizes the markup available for documents and introduces markup and application programming interfaces (APIs) for complex web applications.[8] For the same reasons, HTML5 is also a candidate for cross-platform mobile applications because it includes features designed with low-powered devices in mind.'
     
    },
    {
      id:2,
      title:'CSS 3',
      image: './images/Css.jpg.png',
      desc: 'CSS is designed to enable the separation of content and presentation, including layout, colors, and fonts.[3] This separation can improve content accessibility;[further explanation needed] provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content; and enable the '
      
    },
    {
      id:3,
      title:'Java Script',
      image: './images/JavaScript.jpg',
      desc: 'JavaScript (/ˈdʒɑːvəskrɪpt/), often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior,[10] often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users'
   
    }
  ])
  return (
    <div className='App'>
      <h1>Categories</h1>
      <div className='App__container'>
        {
           data.map(elem =>{
            return(
              <article key={elem.id}> 
                  
              <img src={elem.image} alt={elem.title} />
               <div>
                <h2>{elem.title}</h2>
                
                <span className='App__desc'>${elem.desc}</span>
               </div>

              </article>
            )
           })

          }

      </div>
    </div>
  )
}
