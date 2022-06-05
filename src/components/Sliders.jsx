import React, { useState } from 'react'
import { Carousel } from "react-bootstrap"
import "../styles/Sliders.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function Sliders() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval="5000" >

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
      
    </Carousel>
  );
}




export default Sliders