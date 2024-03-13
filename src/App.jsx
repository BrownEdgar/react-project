import { useState } from 'react'
import './App.css'


export default function App() {
  const [data,setdata] = useState([
    {
      id:1,
      title:'Mersedes Benz',
      price:87000,
      image: './images/mers.jpg.jpg',
      info : ' Daimlers ultraluxury Maybach brand was under the Mercedes-Benz Cars division until December 2012, when production was stopped due to decreased sales.27 It now exists under the Mercedes-Maybach name, with the models being luxury-focused, enhanced models of Mercedes-Benz cars, '
    },
    {
      id:2,
      title:'bmw',
      price:97000,
      image: './images/bmw.jpg.jpg',
      info : 'BMW introduced anti-lock brakes on production motorcycles starting in the late 1980s. The generation of anti-lock brakes available on the 2006 and later BMW motorcycles paved the way for the introduction of electronic stability control, or anti-skid technology later in the 2007 model year.'

    },
    {
      id:3,
      title:'Audi',
      price:107000,
      image: './images/audi.jpg.jpg',
      info:'Like most German manufacturing, at the onset of World War II the Auto Union plants were retooled for military production, and were a target for allied bombing during the war which left them damaged.'
    }
  ])
  return (
    <div className='App'>
      <h1>Cars in stock</h1>
      <div className='App__container'>
        {
           data.map(elem =>{
            return(
              <article key={elem.id}> 
                  
              <img src={elem.image} alt={elem.title} />
               <div>
                <h2>{elem.title}</h2>
                <p className='App__price'>${elem.price}</p>
                <span className='App__infio'>${elem.info}</span>
               </div>

              </article>
            )
           })

          }

      </div>
    </div>
  )
}
