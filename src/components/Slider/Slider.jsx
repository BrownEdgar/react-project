import React, { useState } from "react";
import Slider from "react-slick";
import "./Slider.scss"
import { Link } from "react-router-dom";

function CenterMode() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 1000
    };
    const [Planet, setPlanet] = useState([
        {
            id: 1,
            name: "Mercury",
            photo: "/Planets/1.jpg",
            about: "Mercury is the closest planet to the sun and also the smallest planet in the solar system. The small and cratered planet does not have any moons and zips around the sun faster than any other planet in the solar system, hence why the Romans named it after their swift-footed messenger god.",
            radius: 2439
        },
        {
            id: 2,
            name: 'Venus',
            photo: "/Planets/2.jpg",
            about: "Venus is the second planet from the Sun, and the sixth largest planet. It's the hottest planet in our solar system. Venus is a cloud-swaddled planet named for a love goddess, and often called Earth's twin. But pull up a bit closer, and Venus turns hellish. ",
            radius: 6051
        },
        {
            id: 3,
            name: 'Earth',
            photo: "/Planets/3.jpg",
            about: "Our home planet Earth is a rocky, terrestrial planet. It has a solid and active surface with mountains, valleys, canyons, plains and so much more. Earth is special because it is an ocean planet. Water covers 70% of Earth's surface. ",
            radius: 6371
        },
        {
            id: 4,
            name: 'Mars',
            photo: "/Planets/4.jpg",
            about: "It's dry, rocky, and bitter cold. The fourth planet from the Sun, Mars, is one of Earth's two closest planetary neighbors (Venus is the other). Mars is one of the easiest planets to spot in the night sky – it looks like a bright red point of light. ",
            radius: 3389 
        },
        {
            id: 5,
            name: 'Jupiter',
            photo: "/Planets/5.jpg",
            about: "Jupiter is the fifth planet from the Sun and is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiter's stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. ",
            radius: 69911 
        },
        {
            id: 6,
            name: 'Saturn',
            photo: "/Planets/6.jpg",
            about: "Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets. It is not the only planet to have rings, but none are as spectacular or as complex as Saturn's. ",
            radius: 58232 
        },
        {
            id: 7,
            name: 'Uranus',
            photo: "/Planets/7.jpg",
            about: "Uranus is the seventh planet from the Sun. It is a gaseous cyan-coloured ice giant. Most of the planet is made of water, ammonia, and methane in a supercritical phase of matter, which in astronomy is called 'ice' or volatiles. ",
            radius: 25362 
        },
        {
            id: 8,
            name: 'Neptune',
            photo: "/Planets/8.jpg",
            about: "Dark, cold and whipped by supersonic winds, giant Neptune is the eighth and most distant major planet orbiting our Sun. More than 30 times as far from the Sun as Earth, Neptune is not visible to the naked eye. In 2011, Neptune completed its first 165-year orbit since its discovery. ",
            radius: 25622
        },
        {
            id: 9,
            name: 'Pluto',
            photo: "/Planets/9.jpg",
            about: "Pluto is a dwarf planet located in a distant region of our solar system beyond Neptune known as the Kuiper Belt. Pluto was long considered our ninth planet, but the International Astronomical Union reclassified Pluto as a dwarf planet in 2006. ",
            radius: 1185
        }])
    return (

        <div className="slider-container">
            <h1>Solar System</h1>
            <Slider {...settings}>
                {Planet.map( elem =>{
                    return <Link key={elem.id} to={`/blogs/${elem.id}`} state={elem} >
                    <img src={elem.photo} />
                    <h3>{elem.name}</h3>
                    </Link>
                })}
            </Slider>
        </div>
    );
}

export default CenterMode;
