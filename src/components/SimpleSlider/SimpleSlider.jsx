import React, { useState } from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    arrows:false,
     autoplay:true,
    autoplaySpeed:2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    centerMode:true
   
  };
  const[Planets,] = useState([
    {
      id:1,
      image:'./images/planets/1.jpg.jpg'
      
    },
    {
      id:2,
      image:'./images/planets/2.jpg.jpg'
    },
    {
      id:3,
      image:'./images/planets/3.jpg.jpg'
    },
    {
      id:4,
      image:'./images/planets/4.jpg.jpg'
    },
    {
      id:5,
      image:'./images/planets/5.jpg.jpg'
    },
    {
      id:6,
      image:'./images/planets/6.jpg.jpg'
    },
    {
      id:7,
      image:'./images/planets/7.jpg.jpg'
    },
    {
      id:8,
      image:'./images/planets/8.jpg.jpg'
    }
  ])
  return (
    <Slider {...settings}>
      {Planets.map(planet =>{
        return <img src={planet.image} key={planet.id} to={`/blogs/${planet.id}`}/>
        
      })}
    </Slider>
  );
}