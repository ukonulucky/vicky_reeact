import "../styles/Testimony.css"
import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import StarIcon from '@mui/icons-material/Star';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default class Testimony extends Component {
    constructor() {
        super()
        this.testimonyArray = [
            {
                img: "https://drive.google.com/uc?export=view?&id=1mUuzrTs8YVRE6-Ce898sDOSjVwAnzqNP",
                details:
                    "value 1Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
            },
            {
                img: "https://drive.google.com/uc?export=view?&id=1pNf_l2Rdhc8Kos9JLUNR4-3LRcEOg7Wf",
                details:
                    "value2 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
            },
            {
                img: "https://drive.google.com/uc?export=view?&id=1w7vkf2ZtnnMgktIStYMySs6emX8ZOH7J",
                details:
                    "value 3Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
            },
            {
                img: "https://drive.google.com/uc?export=view?&id=1V_lV-BYN3WwZgjtXYiNhF15Ox4E-Tysb",
                word: "hover",
                details:
                    "value 4 index 3 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
            },
            {
                img: "https://drive.google.com/uc?export=view?&id=1lZTSd1amcMkSQa4_90ZDcLMRxNwvjYRk",
                details:
                    "value 5 index 4 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
            },
            {
                img: "/imgs/clients/client2.jpeg",
                details:
                    "value 6 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
            },
            {
                img: "https://drive.google.com/uc?export=view?&id=1CMXbsTVQ9dIdn2-mAMs0hmmtOJxAwPWf",
                details:
                    "value7 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
            },
            {
                img: "https://drive.google.com/uc?export=view?&id=10Nn7F33umpg-V1UEjnV7H7toy9ciUMYm",
                details:
                    "value 8 index 4 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
            },
            {
                img: "https://drive.google.com/uc?export=view?&id=1vGgW6fPjuF3-qTyhh9OO34hkoeTSPDWc",
                details:
                    "value 9 Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
            }
        ];
    }
    render() {
        var settings = {
            // className: "wrapper2",
            // centerMode: true,
            // infinite: true,
            // centerPadding: "60px",
            infinite: true,
            arrows:false,
            autoplay: true,
            autoplaySpeed: 2000,
            autospeed:300,
            speed: 500,
            slidesToScroll: 1,
          initialSlide: 2,
            slidesToShow:3,
            speed: 500
        };
        
        const startRating = Array(5).fill().map((_, i) => { return (<span key={i} ><StarIcon /> </span>) })
       
        return (
            <div>
            <Slider {...settings}>
                
                    { this.testimonyArray.map((i, j) => {
                    return <div key={ j }>
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
