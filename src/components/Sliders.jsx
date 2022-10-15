import React, { useState } from 'react'
import { Carousel } from "react-bootstrap"
import "../styles/Sliders.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1Logo  from "../images/homeImageSlider/easter.jpg"
import slide2Logo  from "../images/homeImageSlider/promo.jpg"
import slide3Logo from "../images/homeImageSlider/slide1.jpg"
import slide4Logo from "../images/homeImageSlider/slide2.jpg"
import slide5Logo from "../images/homeImageSlider/slide3.jpg"


function Sliders() {
  const [index, setIndex] = useState(0);

  const sliderArray = [
    {
      id: 1,
      uri:slide1Logo
    },
    {
      id: 2,
      uri:slide2Logo
    },
    {
      id: 3,
      uri:slide3Logo
    },
    {
      id: 4,
      uri:slide4Logo
    },
    {
      id: 5,
      uri:slide5Logo
    }
  ]

  const sliderEle = sliderArray.map((i) => {
      return (
        <Carousel.Item className={"item"} key={ i.id }>
      <div className={"pic"}>
        <img
        className="d-block w-100 picImage"
              src={ i.uri }
          alt="Second slide"
          height= "70vh"
          
      />
      </div>
    </Carousel.Item>
      )
  })
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval="5000" >
{/* 
      <Carousel.Item className={"item"}>
        <div className={"pic"}>
          <img
          className="d-block w-100 picImage"
          src="https://drive.google.com/uc?export=view?&id=1YrVTL8BblgkeuOpN-T2jsAljC3BJUp1Q"
            alt="Second slide"
            height= "70vh"
            
        />
        </div>
      </Carousel.Item>
      
      <Carousel.Item className={ "item" }>
      <div className={"pic"}>
          <img
          className="d-block w-100 picImage"
          src="https://drive.google.com/uc?export=view?&id=1hpZNv2Cm3tUkjFNV2phWB-bolALuUhlP"
            alt="House for sale"
            height= "70vh"
          
          />
 
        </div>
        

      </Carousel.Item>
      <Carousel.Item className={ "item" }>
      <div className={"pic"}>
          <img
          className="d-block w-100 picImage"
          src="https://drive.google.com/uc?export=view?&id=1F30a1ATzd8xdDvauXwGf0gId3AGN-liA"
            alt="house for sale slide"
            height= "70vh"
          
        />
        </div>
      </Carousel.Item>
      <Carousel.Item className={ "item" }>
      <div className={"pic"}>
          <img
          className="d-block w-100 picImage"
          src="https://drive.google.com/uc?export=view?&id=1xUBFRH4ipamOX_n_ZJ0bxhDbcSFo37E7"
            alt="house for sale slide"
            height= "70vh"
        />
        </div>
        

      </Carousel.Item>
      <Carousel.Item className={ "item "}>
      <div className={"pic"}>
          <img
            className="d-block w-100 picImage"
            src="https://drive.google.com/uc?export=view?&id=1-y0g6niNXW5broRiy-ygrBYxRzKADZPh"
            alt="House for sale"
            height= "70vh"
        />
        </div>
      </Carousel.Item>
       */}
      { sliderEle }
    </Carousel>
  );
}




export default Sliders