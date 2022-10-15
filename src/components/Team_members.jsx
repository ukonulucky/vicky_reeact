import "../styles/Team__members.css"
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import staff1 from "../images/staff/staffs/developerPic.jpg"
import staff2 from "../images/staff/staffs/lawyer.jpg"
import staff3 from "../images/staff/staffs/staff1.jpg"
import staff4 from "../images/staff/staffs/staff2.jpg"




export default class Team__members extends Component {
  constructor() {
    super()
    this.teamMembersArray = [
      {
        img:staff3,
      //   img:  "https://drive.google.com/uc?export=view?&id=1ifVi4A3bBQV-g9ItM3cwkCZgeYGYqi-k",
        fullName: "Victoria Ogbonna",
        details: "Cheif Executive Officer",
      },
      {
        img:staff4,
        // img: "https://drive.google.com/uc?export=view?&id=1phIHez7GYEUROOqVll2Q8oW4nz4yzfvQ",
        fullName: "Eddy Usong",
        details: "Brand And Digital Consultant",
      },
     
      {
        img:staff1,
        // img: "https://drive.google.com/uc?export=view?&id=1jfF3-1o-Ht126Pv9iqI6nk-dLU-t6Bxh"
        fullName: "Ukonu Lucky",
        details: "Website Developer",
      },
      {
        img:staff2,
        // img: "https://drive.google.com/uc?export=view?&id=14-ElWULGvQPYEkSr1bNFnttDlIkdes0v",
        fullName: "Noble Reuer",
        details: "Site Manager",
      },
      {
        img:staff3,
      //   img:  "https://drive.google.com/uc?export=view?&id=1ifVi4A3bBQV-g9ItM3cwkCZgeYGYqi-k",
        fullName: "Victoria Ogbonna",
        details: "Cheif Executive Officer",
      },
      {
        img:staff4,
        // img: "https://drive.google.com/uc?export=view?&id=1phIHez7GYEUROOqVll2Q8oW4nz4yzfvQ",
        fullName: "Eddy Usong",
        details: "Brand And Digital Consultant",
      },
      {
        img:staff1,
        // img: "https://drive.google.com/uc?export=view?&id=1jfF3-1o-Ht126Pv9iqI6nk-dLU-t6Bxh"
        fullName: "Ukonu Lucky",
        details: "Website Developer",
      },
      {
        img:staff2,
        // img: "https://drive.google.com/uc?export=view?&id=14-ElWULGvQPYEkSr1bNFnttDlIkdes0v",
        fullName: "Noble Reuer",
        details: "Site Manager",
      },
     
    ]
  }
   
  
  render() {
    var settings = {
      infinite: true,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      autospeed: 4000,
      pauseOnHover: false,
      arrows:true,
      responsive: [
        {
          breakpoint: 50000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            autospeed: 300,
            arrows:true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            autospeed:300
          }
        },
        {
          breakpoint: 560,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows:false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            autospeed:300
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
            <div className={"team__members__wrapper"}>
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
