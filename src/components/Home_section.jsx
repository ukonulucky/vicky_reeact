import React from "react"
import "../styles/Home_section.css"
import {Link} from "react-router-dom"
function Home_section({ title, button, url, details, leftStyles}) {

  return (
      <div className={"wrapper"}>
      <div className={ leftStyles ==  "item_left" ? "item_left " : "item_order"}>
        <div className={"pic2"}>
        <img
          className={"pic"}
            src={ url }
          alt="Second slide"
            layout="fill"
            className="d-block w-100"
          />
            <span>for let</span>
          
         </div>
                  
          </div>
        
      <div className={"item_right"}>
        <h2>{ title }</h2>
        <p>{ details }</p>
              <button>
                  <Link to="/tolet">
                          { button }
    
                  </Link>
              </button>
              
          </div>
          
    </div>
  )
}

export default Home_section