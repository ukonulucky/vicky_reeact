import "../styles/Team__members.css"
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
export default class Team__members extends Component {
  constructor() {
    super()
    this.teamMembersArray = [
      {
        img:  "https://drive.google.com/uc?export=view?&id=1ifVi4A3bBQV-g9ItM3cwkCZgeYGYqi-k",
        fullName: "Victoria Ogbonna",
        details: "Cheif Executive Officer",
      },
      {
        
        img: "https://drive.google.com/uc?export=view?&id=1phIHez7GYEUROOqVll2Q8oW4nz4yzfvQ",
        fullName: "Eddy Usong",
        details: "Brand And Digital Consultant",
      },
      {
        img: "../images/clients/client8.jpeg",
        fullName: "Benson Donald",
        details: "Sales Manager",
      },
      {
        img: "../images/clients/client9.jpeg",
        fullName: "Flem Janks",
        details: "Operational Manager",
      },
      {
        img: "../images/clients/client1.jpeg",
        fullName: "Oak Boxin",
        details: "Chief Accountant",
      },
      {
        img: "../images/clients/client2.jpeg",
        fullName: "Ben France",
        details: "Chief Adviser",
      },
      {
        img: "../images/clients/client4.jpeg",
        fullName: "Mikel Okon",
        details: "Digital Marketer",
      }
    ]
  }
   
  
  render() {
    var settings = {
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
    initialSlide: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1,
            arrows:true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            autospeed:300
          }
        }
      ]
    }
    return (
      <div>
         <Slider {...settings} >
        {this.teamMembersArray.map((i, k) => {
          return <div key={k}>
            <div className={"wrapper"}>
              <div className={"container__new"}>
                <div className={"pic"}>
                  <LazyLoadImage
                    src={i.img}
                    alt="user"
                    effect="blur"
                    height="100%"
                    width="100%"
                  />
                </div>
                <div className="info">
                  <h3>
                    {i.fullName}
                  </h3>
                  <p>
                           
                    {i.details}
                             
                  </p>
    
                </div>
    
              </div>
           
            </div>
           
          </div>
        })}
         </Slider>
      </div>
  )
  }
}
