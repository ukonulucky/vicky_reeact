import { Link } from "react-router-dom";


import React from "react";

  import Testimony from "./Testimony";
// import Home_section from "./Home_section";
import "../styles/HomePage.css";
 import Properties from "./Properties";
import Team__members from "./Team_members";

// import MultipleItems from "./Sliders3";
// import SimpleSlider from "./Slider2";

function HomePage() {
  
  // const HouseArray = [
  //   {
  //     leftStyles: "item_left",
  //     button: "View Property",
  //     title: "5 BEDROOM DUPLEX",
  //     details:"LUXURY LISTING... 5 BEDROOM DETACHED DUPLEX WITH A SWIMMING POOL, AND A ROOM BQ FOR SALE. LOCATION: IKOTA, LEKKI LAGOS",
  //     img: "/imgs/for__sale/flat2/frontView.webp"
  //   },
  //   {
  //     leftStyles: "item_order",
  //     button: "View Property",
  //     img:"/imgs/for__sale/flat1/frontview.webp",
  //     title: "2 bedroom flat for Rent",
  //     details:
  //       "Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
  //   },
  //   {
  //     leftStyles: "item_left",
  //     button: "View Property",
  //     img: "/imgs/for__sale/flat3/flat3__frontView.webp",
  //     title: "A duplex for Sale",
  //     details:
  //       "Lilly, Andy, Anthony, I want to commend you for your efforts. I noticed and appreciated your attention to detail and relentless determination. I am really please with my flat and",
  //   },
  // ];

  const letArray = [
    {
      link: "/sales",
      details:"LUXURY LISTING ‼‼‼  5 BEDROOM DETACHED DUPLEX WITH A SWIMMING POOL,  AND A ROOM BQ FOR SALE. LOCATION: IKOTA, LEKKI LAGOS",
      img: "https://drive.google.com/uc?export=view?&id=1PD9PCAWCR1jG_pIUNo27ipeNq-gqTMl6"
    },
    {
      link: "/sales",
      details:"NEW LISTING ‼‼‼ FULLY DETACHED 6 BEDROOM DUPLEX WITH AN OPEN ROOF TERRACE, SWIMMING POOL AND BQ FOR SALE.",
      img: "https://drive.google.com/uc?export=view?&id=1jQgykGurU5kc563eE2vZyUiUIJrRZabe"
    },
    {
      link: "/sales",
      details:"NEW LISTING ‼‼‼ 6 BEDROOM DETACHED DUPLEX , AND ONE ROOM BQ FOR SALE.",
      img: "https://drive.google.com/uc?export=view?&id=160qbhEp6gkp_25NMxR6XIW4eShhuJ2mc"
    },
  ];
 

  // const newTestimony = () => {
  //   for (let i = 0; i <= testimonyArray.length; i++) {
  //     if (i <= testimonyArray.lenth) {
  //       return (
  //         <Testimony
  //           img={item.img}
  //           details={item.details}
  //           id={i}
  //           index={index2}
  //           key={i}
  //         />
  //       );
  //     } else {
  //       i = 0;
  //     }
  //   }
  // };

 

 

  const letProperty = letArray.map((item, i) => (
    <div className={"home"} key={i} style={{display:"block"}}>
      <Properties details={item.details} url={item.img} link={item.link} />
    </div>
  ));

  // const latestProperty = HouseArray.map((item, i) => (
  //   <div className={home} key={i}>
  //     <Home_section
  //       title={item.title}
  //       details={item.details}
  //       button={item.button}
  //       url={item.img}
  //       leftStyles={item.leftStyles}
  //     />
  //   </div>
  // ));

  return (

    <div className={"container__Home"}>
     
      <div className={"wrapper__Home"}>
        <div className={"about"}>
          <h2>About Us</h2>
          <p>
            Our company is not confined by traditional real estate boundaries
            when it comes to buying, selling and renting asset management,
            instead we are always coming up with new innovative ways to satisfy
            our client's need, and be the leading company in the real estate
            industry.
          </p>

          <div className={"about__search"}>
            {/* <button>
              <Link to="/let">
               Search For Property To let
              </Link>
            </button> */}
            <button> 
              <Link to="/sales">
                 Search For Property To Buy
              </Link>
            </button>
            {/* <button>
              <Link to="/project">
               Off Plan Project 
              </Link>
           </button> */}
          </div>
        </div>
        {/* {latestProperty} */}
      

      
        <div className={"advert"}>{letProperty}</div>
        <div className={"clients"}>
        <h2>Testimonies</h2>
          <Testimony />
          </div>
      

        </div>
        <div className={"team"}>
          <h2 > <center>Meet Team</center> </h2>
          <div className="team__members">
          <Team__members />
          </div>
             
        </div>
      </div>
  )
}

export default HomePage;
