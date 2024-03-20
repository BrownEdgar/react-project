import {  useState,useEffect } from 'react'
import './App.scss'
import BeatLoader from "react-spinners/ClipLoader"



export default function App() {
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
     setLoading(false)
    },2000)
  },[])
  const [data,setdata] = useState([
    {
      id:1,
      title:'Google Pixel -Black',
      image: './images/pexels1.jpg',
      price: '10'
     
    },
    {
      id:2,
      title:'Samsung S7',
      image: './images/pexels2.jpg',
      price: ' 16'
      
    },
    {
      id:3,
      title:'HTC 10 -Black',
      image: './images/pexels3.jpg',
      price: '8'
   
    },
    {
      id:4,
      title:'HTC 10 -White',
      image:'./images/pexels4.jpg',
      price: '18'
   
    }
  ])
  return (

    <div className='App'>
      
      {
        
        loading?
        <BeatLoader

        color={'#D0021B'}
        loading={loading}
        size={100}
      />
      : useState
     
      }
       <h1>Our products</h1>
      <div className='App__container'>
        
        {
           data.map(elem =>{
            
            return(
              
              <article key={elem.id}> 

              <div className='Nkar'>  
                
              <img src={elem.image} alt={elem.title} /> </div>
               <div>
                <h2>{elem.title}</h2>
                
                <span className='App__desc'>${elem.price}</span>
               </div>

              </article>
            )
           })

          }

      </div> 
  
    </div>
    
  );
  
}

