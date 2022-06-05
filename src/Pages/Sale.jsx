import React from "react"
import "../styles/properties__sale__slider.css"
// import styles from "../styles/properties__sale.scss"
import Properties__sale__slider from "../components/Properties_sale_slider";

function Sale() {
  const saleArray = [
    {
      link: "5 BEDROOM DUPLEX",
      details: "LUXURY LISTING ‼‼‼  5 BEDROOM DETACHED DUPLEX WITH A SWIMMING POOL,  AND A ROOM BQ FOR SALE. LOCATION: IKOTA, LEKKI LAGOS",
      imageArray: ["https://drive.google.com/uc?export=view?&id=1LxHAwR_u5e91Hgdoaf8OSmGvmuilE2qO","https://drive.google.com/uc?export=view?&id=1zKh_ZAXFlTd7d8Tsz7wNj1QV3Cb2CQPw","https://drive.google.com/uc?export=view?&id=13Qv_AB5e9HkrNJvk6OC2Xjd1m4O5F4lX","https://drive.google.com/uc?export=view?&id=1Pv-Y2YrIMLX0jGjT0NpF5pSVqE6L5xNp","https://drive.google.com/uc?export=view?&id=1A8iXlUnoA2dcIWk3Wg1bqZjA_dt8x70R","https://drive.google.com/uc?export=view?&id=114R-qeFKD9NmF0_KXoAyqqRoLn8WcAy1"]
    },
    {
      link: "7 BEDROOM DUPLEX",
      details: "NEW LISTING ‼‼‼ FULLY DETACHED 6 BEDROOM DUPLEX WITH AN OPEN ROOF TERRACE, SWIMMING POOL AND BQ FOR SALE.",
      imageArray: ["https://drive.google.com/uc?export=view?&id=1CGERNpyHBeBh1oY-S970Hx2LDZ_lbvAj","https://drive.google.com/uc?export=view?&id=15J2DbUgIQ-AeX07NrpiuobxnK9O69wvN","https://drive.google.com/uc?export=view?&id=1sbsaD5tyaF0ShH8mUZEfql_6lTSjchn8","https://drive.google.com/uc?export=view?&id=1TW2lOQfuGCqCXLio0ZbanoNn2LR8tuhL","https://drive.google.com/uc?export=view?&id=1B6o5pfvikMPlC2sWv_yf5GCyTMTp68Dv","https://drive.google.com/uc?export=view?&id=130X-ZxNwVLEaGtjxMUK2zbPvEEe_qLvr"],
    },   
    {
      link: "6 BEDROOM DUPLEX",
      details: "NEW LISTING ‼‼‼ 6 BEDROOM DETACHED DUPLEX, AND ONE ROOM BQ FOR SALE.",
      imageArray: [" https://drive.google.com/uc?export=view?&id=1gC5DQa156joRZYKQhlpujPTyI4ep-oZp","/images/for__sale/flat3/flat3__view1.webp","/images/for__sale/flat3/flat3__view2.webp","/images/for__sale/flat3/flat3__view3.webp","/images/for__sale/flat3/flat3__view4.webp","/images/for__sale/flat3/flat3__view5.webp","/images/for__sale/flat3/flat3__view6.webp","/images/for__sale/flat3/flat3__view7.webp","/images/for__sale/flat3/flat3__view8.webp"]
    },
    {
      link: "5 BEDROOM DETACHED DUPLEX",
      details: "NEW LISTING ‼‼‼ 5 BEDROOM DETACHED DUPLEX WITH A ROOM BQ FOR SALE.",
      imageArray: ["https://drive.google.com/uc?export=view?&id=1tvg_32GlKQ1XsO60gMMmhn6whclxMQFI",
        "https://drive.google.com/uc?export=view?&id=1jQgykGurU5kc563eE2vZyUiUIJrRZabe",
        "https://drive.google.com/uc?export=view?&id=1hFKFQIT9szVmfsqtmo6jWThRSrQ2lIRZ",
        "https://drive.google.com/uc?export=view?&id=1zfvB01RaUDsswMfKvvtInfa_RF9aI0Pg",
        "https://drive.google.com/uc?export=view?&id=1S-5DJK4PjNF2O_VBmFeSM_zTMyWkhn9f",
        "https://drive.google.com/uc?export=view?&id=1RcxdNMfZHMUnqPuTg9k_-5_MAC8A9Kz7",
        "https://drive.google.com/uc?export=view?&id=1evIcsREWUGhgYlD2eMalKZt654-W8lCS",
        "https://drive.google.com/uc?export=view?&id=1DQoRnFNmRfP9cZnHuZ-Y6_uhhE7lmWBI",
        "https://drive.google.com/uc?export=view?&id=1cIOQyCDA3TBKGusyZxH-fg1ij7HbTjXL"]
    },
    {
      link: "5 BEDROOM DETACHED DUPLEX",
      details: "NEW LISTING ‼‼‼ FULLY DETACHED 5 BEDROOM DUPLEX WITH AN OPEN ROOF TERRACE, SWIMMING POOL, CINEMA , GYM AND BQ FOR SALE AT LEKKI AJAH LAGOS",
      imageArray: [
        "https://drive.google.com/uc?export=view?&id=1PD9PCAWCR1jG_pIUNo27ipeNq-gqTMl6",
        "https://drive.google.com/uc?export=view?&id=1YovIKg_pvGE0Z9nKRd_6M8OnWhgFecfT",
        "https://drive.google.com/uc?export=view?&id=1S48NzQ0pW2BQRY7Aq6hPYEVd-adVs2u8",
        "https://drive.google.com/uc?export=view?&id=1A2pV3GFITc257qsD-AfFScnHLpQ5rYQe",
        "https://drive.google.com/uc?export=view?&id=1AGXstwr4i66xLn837ZUYNXFACuCuMlJO",
        "https://drive.google.com/uc?export=view?&id=1bU5G9dZCIkYJNL2b0Ogw3hWql0AMb5mk",
        "https://drive.google.com/uc?export=view?&id=1OIgrXtl416ixXsQeIlFEeQ3mXMGgIL5r",
        "https://drive.google.com/uc?export=view?&id=1SVQqi9JzviUfwnZkHxyof3JyS77gmWyO", 
        "https://drive.google.com/uc?export=view?&id=19wwmL6W7PosWBDjcRBnBPWI4473GFhRK"]
    },
    
    {
      link: "5 BEDROOM DUPLEX",
      details: "NEW LISTING ‼‼‼ FULLY DETACHED 5 BEDROOM DUPLEX WITH A SWIMMING POOL AND BQ FOR SALE AT OSAPA LEKKI AJAH LAGOS",
      imageArray: ["https://drive.google.com/uc?export=view?&id=1vIQBHI0YcIMixac-PGWOR4Ny258s5UYC",
        "https://drive.google.com/uc?export=view?&id=10fYaG5GrF_RI_SDZRQ2cEJxFOTu5cHJQ",
        "https://drive.google.com/uc?export=view?&id=1SD5t6zOB0ArvYB2VaO6H1W_r7yeUA1uV",
        "https://drive.google.com/uc?export=view?&id=1lwubh4SEQfu38qYbAA4yDuBB-x9AyhLP",
        "https://drive.google.com/uc?export=view?&id=1pIcmYbzv8Sy7i3rAnlpCAzR3zWCBTFZM",
        "https://drive.google.com/uc?export=view?&id=1rJ370QNYZeSCH0ymyPXUhqLdRt8r3riU",
        "https://drive.google.com/uc?export=view?&id=1dxN58wXBUrl-1kyaIrQsaR7la-bz67Ba",
        "https://drive.google.com/uc?export=view?&id=1NKgWLmjmJLH39Y4nKS3VihI6uoLdMoQq"]
    }
    
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
  <div className={"container__sale"}>
    {saleAvailable}
  </div>
)
}
export default Sale