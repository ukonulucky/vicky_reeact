import React from "react"
import "../styles/properties__sale__slider.css"

import { HiLocationMarker,HiPhone, HiMail  } from "react-icons/hi"
import { Carousel, CarouselItem } from "react-bootstrap"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function Properties__sale__slider({ picArray, link, details}) {
  const carouselArray = picArray.map((i, j) => {
      return  <CarouselItem key={ j }>
        <img
      src={ i }
        alt="slider"
        width="100%"
        heigth="60vh"
       />
          
   </CarouselItem>
 
  })
  return (
    <div className={"wrapper__sale"}>
              <div className={"wrapper__slider"}>
              <Carousel>
          {carouselArray}
         
             </Carousel>
      </div>
      <div className={ "wrapper__description"}>
        <h2>{ link }</h2>
        <div className={"contact"}>
        <HiLocationMarker color="darkblue" />
       
          <small>{details}</small>
        </div>
          <div className={"contact"}>
            <HiPhone  color="darkblue" />
          <small>
          +2349028506555,
          +2349038760160
            </small>
        </div>
        
        <div className={"contact"}>
        <HiMail color="darkblue" />
            <small>vickshomess@gmail.com</small>
        </div>
      </div>
        </div>
       
  )
}

export default Properties__sale__slider
