import { Co2Sharp } from "@mui/icons-material";
import React from "react"
import "../styles/properties__sale__slider.css"

// import styles from "../styles/properties__sale.scss"
import Properties__sale__slider from "../components/Properties__sale__slider";

function tolet() {
  const saleArray = [
    {
      link: "5 BEDROOM DUPLEX",
      details: "LUXURY LISTING ‼‼‼  5 BEDROOM DETACHED DUPLEX WITH A SWIMMING POOL,  AND A ROOM BQ FOR SALE. LOCATION: IKOTA, LEKKI LAGOS",
      imageArray: ["/images/for__sale/flat1/frontview.jpg","/images/for__sale/flat1/flat1__view1.jpg","/images/for__sale/flat1/flat1__view2.jpg","/images/for__sale/flat1/flat1__view3.jpg","/images/for__sale/flat1/flat1__view4.jpg","/images/for__sale/flat1/flat1__view5.jpg","/images/for__sale/flat1/flat1__view6.jpg"]
    },
    {
      link: "7 BEDROOM DUPLEX",
      details: "NEW LISTING ‼‼‼ FULLY DETACHED 6 BEDROOM DUPLEX WITH AN OPEN ROOF TERRACE, SWIMMING POOL AND BQ FOR SALE.",
      imageArray: ["/images/for__sale/flat2/flat2__view1.jpg","/images/for__sale/flat2/flat2__view2.jpg","/images/for__sale/flat2/flat2__view3.jpg","/images/for__sale/flat2/flat2__view4.jpg","/images/for__sale/flat2/flat2__view5.jpg","/images/for__sale/flat2/flat2__view6.jpg"],
    },
    {
      link: "6 BEDROOM DUPLEX",
      details: "NEW LISTING ‼‼‼ 6BEDROOM DETACHED DUPLEX , AND ONE ROOM BQ FOR SALE.",
      imageArray: ["/images/for__sale/flat3/flat3__frontview.jpg","/images/for__sale/flat3/flat3__view1.jpg","/images/for__sale/flat3/flat3__view2.jpg","/images/for__sale/flat3/flat3__view3.jpg","/images/for__sale/flat3/flat3__view4.jpg","/images/for__sale/flat3/flat3__view5.jpg","/images/for__sale/flat3/flat3__view6.jpg","/images/for__sale/flat3/flat3__view7.jpg","/images/for__sale/flat3/flat3__view8.jpg"]
    },
    {
      link: "5 BEDROOM DUPLEX",
      details: "NEW LISTING ‼‼‼ 5BEDROOM DETACHED DUPLEX WITH A ROOM BQ FOR SALE, Ajah Lekki Lagos",
      imageArray: ["/images/for__sale/flat3/flat3__frontview.jpg","/images/for__sale/flat3/flat3__view1.jpg","/images/for__sale/flat3/flat3__view2.jpg","/images/for__sale/flat3/flat3__view3.jpg","/images/for__sale/flat3/flat3__view4.jpg","/images/for__sale/flat3/flat3__view5.jpg","/images/for__sale/flat3/flat3__view6.jpg","/images/for__sale/flat3/flat3__view7.jpg","/images/for__sale/flat3/flat3__view8.jpg"]
    },
    // {
    //   link: "6 BEDROOM DUPLEX",
    //   details: "NEW LISTING ‼‼‼ 6BEDROOM DETACHED DUPLEX , AND ONE ROOM BQ FOR SALE.",
    //   imageArray: ["/images/for__sale/flat3/flat3__frontview.jpg","/images/for__sale/flat3/flat3__view1.jpg","/images/for__sale/flat3/flat3__view2.jpg","/images/for__sale/flat3/flat3__view3.jpg","/images/for__sale/flat3/flat3__view4.jpg","/images/for__sale/flat3/flat3__view5.jpg","/images/for__sale/flat3/flat3__view6.jpg","/images/for__sale/flat3/flat3__view7.jpg","/images/for__sale/flat3/flat3__view8.jpg"]
    // },
    // {
    //   link: "6 BEDROOM DUPLEX",
    //   details: "NEW LISTING ‼‼‼ 6BEDROOM DETACHED DUPLEX , AND ONE ROOM BQ FOR SALE.",
    //   imageArray: ["/images/for__sale/flat3/flat3__frontview.jpg","/images/for__sale/flat3/flat3__view1.jpg","/images/for__sale/flat3/flat3__view2.jpg","/images/for__sale/flat3/flat3__view3.jpg","/images/for__sale/flat3/flat3__view4.jpg","/images/for__sale/flat3/flat3__view5.jpg","/images/for__sale/flat3/flat3__view6.jpg","/images/for__sale/flat3/flat3__view7.jpg","/images/for__sale/flat3/flat3__view8.jpg"]
    // },
  ];
  const saleSlider = saleArray.map(i => {
      {
      const value = i.imageArray.map(k => {
      return k
      })
     return value
      }
  })
  const saleAvailable = saleArray.map((i, j) => {
   return (<div key={j}>
      <Properties__sale__slider
        details={i.details}
        link={i.link}
        picArray={ saleSlider[j] }
      />
   </div>
   )
  })
return(
  <div className={"container"}>
    { saleAvailable }
  </div>
)
}
export default tolet