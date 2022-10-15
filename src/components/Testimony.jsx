import "../styles/Testimony.css"
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import StarIcon from '@mui/icons-material/Star';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import client1 from "../images/clients/client1.jpeg"
import client2 from "../images/clients/client2.jpeg"
import client3 from "../images/clients/client3.jpeg"
import client4 from "../images/clients/client4.jpeg"
import client5 from "../images/clients/client5.jpeg"
import client6 from "../images/clients/client6.jpeg"
import client7 from "../images/clients/client7.jpeg"
import client8 from "../images/clients/client8.jpeg"
import client9 from "../images/clients/client9.jpeg"
export default class Testimony extends Component {
    constructor() {
        super()
        this.testimonyArray = [
            {
                 img:client1,
            //     img: "https://drive.google.com/uc?export=view?&id=1mUuzrTs8YVRE6-Ce898sDOSjVwAnzqNP",
            //     
            details:
                    "value 1Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
            },
            {
                img:client2,
                // img: "https://drive.google.com/uc?export=view?&id=1pNf_l2Rdhc8Kos9JLUNR4-3LRcEOg7Wf",
                details:
                    "value2 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
            },
            {
                img:client3,
                // img: "https://drive.google.com/uc?export=view?&id=1w7vkf2ZtnnMgktIStYMySs6emX8ZOH7J",
                details:
                    "value 3Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
            },
            {
                img:client4,
                // img: "https://drive.google.com/uc?export=view?&id=1V_lV-BYN3WwZgjtXYiNhF15Ox4E-Tysb",
                word: "hover",
                details:
                    "value 4 index 3 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
            },
            {
                img:client5,
                // img: "https://drive.google.com/uc?export=view?&id=1lZTSd1amcMkSQa4_90ZDcLMRxNwvjYRk",
                details:
                    "value 5 index 4 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
            },
            {
                img:client6,
                // img: "/imgs/clients/client2.jpeg",
                details:
                    "value 6 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
            },
            {
                img:client7,
                // img: "https://drive.google.com/uc?export=view?&id=1CMXbsTVQ9dIdn2-mAMs0hmmtOJxAwPWf"
                details:
                    "value7 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
            },
            {
                img:client8,
                // img: "https://drive.google.com/uc?export=view?&id=10Nn7F33umpg-V1UEjnV7H7toy9ciUMYm",
                details:
                    "value 8 index 4 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
            },
            {
                img:client9,
                // img: "https://drive.google.com/uc?export=view?&id=1vGgW6fPjuF3-qTyhh9OO34hkoeTSPDWc",
                details:
                    "value 9 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
            }
        ];
    }
    render() {
        var settings = {
            initialSlide: 0,
            pauseOnFocus: true,
            autoplay:true,
            autoplaySpeed: 2000,
            autospeed: 300,
            infinite: true,
            adaptiveHeight: true,
            centerMode: true,
            responsive: [
                {
                  breakpoint: 5000,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    
                  }
                },
                {
                  breakpoint: 760,
                  settings: {
                    slidesToShow: 1,
                      slidesToScroll: 1,
                      infinite: true
                  }
                },
                {
                    breakpoint: 560,
                    settings: {
                      slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true
                    }
                  }
              ]
            
        };
        
        const startRating = Array(5).fill().map((_, i) => { return (<span key={i} ><StarIcon /> </span>) })
       
        return (
            <div>
            <Slider {...settings}>
                
                    { this.testimonyArray.map((i, j) => {
                        return <div key={j} className="main__slider" >
                            <div className={"container__Testimony"}>
                                <div className={"svg"}>
                                    <div className={"star"}>
                                        {
                                            startRating
                                        }
                                    </div>
                                </div>
                                <div className={"comment"}>
                                    <p>
                                        {i.details}
                                    </p>
        
                                </div>
                                <div className={"pic"}>
                                    <LazyLoadImage
                                        src={i.img}
                                        alt="user"
                                    effect="blur"
                                    height= "100px"
                                    width="100px"
                                    />
                                </div>
                        
                            </div>
                    </div>
                   
                })
               }
                </Slider>
                </div>
            )
    }
}
