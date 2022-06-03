import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Testimony from "./Testimony";
import "../styles/Testimony.scss"

function MultipleItems() {
   const testimonyArray = [
        {
          image: "/images/clients/client6.jpeg",
          details:
            "value 1Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
        },
        {
          image: "/images/clients/client7.jpeg",
          details:
            "value2 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
        },
        {
          image: "/images/clients/client8.jpeg",
          details:
            "value 3Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
        },
        {
          image: "/images/clients/client9.jpeg",
          word: "hover",
          details:
            "value 4 index 3 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
        },
        {
          image: "/images/clients/client1.jpeg",
          details:
            "value 5 index 4 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
        },
        {
          image: "/images/clients/client2.jpeg",
          details:
            "value 6 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
        },
        {
          image: "/images/clients/client3.jpeg",
          details:
            "value7 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
        },
        {
          image: "/images/clients/client4.jpeg",
          details:
            "value 8 index 4 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
        },
        {
          image: "/images/clients/client5.jpeg",
          details:
            "value 9 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
        },
    ];
    
 
 const testimonyList = testimonyArray.map((item, i) => {
        return (
          <Testimony
            image={item.image}
            details={item.details}
            id={i}
            key={i}
          />
        );
      });
    const settings = {
        infinite: true,
      autoplay:"true",
      autospeed: 3500,
       speed:1000,
      slidesToShow: 1,
      centerMode: true,
      centerPadding: 0,
      pauseOnHover:false,
    };
 
    return (
        <Slider {...settings}>
        { testimonyList }
        </Slider>
    );
}
  
export default MultipleItems