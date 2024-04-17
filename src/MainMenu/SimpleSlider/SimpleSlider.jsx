import axios from "axios";
import React,{ useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default function SimpleSlider() {
    const [place, setPlace] = useState([])

    useEffect(() => {
      axios('http://localhost:5172/profile')
      .then(res=>setPlace(res.data))
    }, [])
    
   
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {
        place.map(elem=>{
            return<Link to={`place/${elem.id}`} key={elem.id}>
            <img src={elem.img} />
            <h3>{elem.name}</h3>
            </Link>
        })
      }
    </Slider>
  );
}