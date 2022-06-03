import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Testimony from "./Testimony";

export default class SimpleSlider extends Component {
   
        state = {
            index2 : 0
        }
    // indexSeter2 = () => {
    //         setTimeout(() => {
    //           setState(this.state.index2 < 178 ? this.state.index2 + 1 : 0);
             
    //         }, 400);
    //      }
         
    testimonyArray = [
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
    
 
 testimonyList = this.testimonyArray.map((item, i) => {
        return (
          <Testimony
            image={item.image}
            details={item.details}
            id={i}
            index={this.state.index2}
            key={i}
          />
        );
 });
  
  render() {
    const settings = {
        infinite: true,
      slidesToScroll: 1,
      slidesToShow: 3,
      dots: true,
    };
    return (
      <div>
        <h2> STAFFS </h2>
        <Slider {...settings}>
        <div>
        <h3>{ this.testimonyList[0]}</h3>
          </div>
          <div>
          <h3>{ this.testimonyList[1]}</h3>
          </div>
          <div>
          <h3>{ this.testimonyList[2]}</h3>
          </div>
          <div>
          <h3>{ this.testimonyList[3]}</h3>
          </div>
          <div>
          <h3>{ this.testimonyList[4]}</h3>
          </div>
          <div>
          <h3>{ this.testimonyList[5]}</h3>
          </div>
          <div>
          <h3>{ this.testimonyList[6]}</h3>
          </div>
          <div>
          <h3>{ this.testimonyList[7]}</h3>
          </div>
          <div>
          <h3>{ this.testimonyList[8]}</h3>
          </div>
        </Slider>
      </div>
    );
  }
}