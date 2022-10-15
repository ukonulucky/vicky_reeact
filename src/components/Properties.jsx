import React from "react"
import "../styles/Properties.css"
import { Link } from "react-router-dom"
import 'react-lazy-load-image-component/src/effects/blur.css';
function Properties({ url, details, link }){
  return (
    <div className={"wrapper__Properties"}>
      
      <div className={"text"}>
       
              <div className={"pic"}>
          <img
            // effect="blur"
                src={ url }
            alt="Property for Sale"
            width="100%"
            height="100%"
            // className=" properties_pic
          />
        <span>for sale</span>
              </div>
              <p>
                  { details }
              </p>
              <button>
              <Link to={ link }>
                    
                         View Property
                   
    
                  </Link>
          </button>
          </div>
            
          </div>
       
  )
}

export default Properties