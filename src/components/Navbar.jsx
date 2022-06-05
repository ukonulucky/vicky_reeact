
import React from "react"
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from "react-router-dom"
import "../styles/Navbar.css"


function Navbar() {
    
    return (
      <div className={"navbar_Navbar "}>
        
        <nav className="navbar navbar-expand-sm navbar-light ">
          <div className="container-fluid ps-2 pe-2 ms-3 me-3 ">
        
            <img src="https://drive.google.com/uc?export=view?&id=1zR0C5x0xOOUo4lwJs_fCbD-tAYlKZxQ2"  width="80px" height="50px" alt="logo" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse`}
              id="navbarSupportedContent"
            >
              <div className={"nav_inner2"}>
             
                <ul className="navbar-nav ml-auto me-auto  mb-lg-0">
                  <li className={`nav-item`}>
                    <Link to="/" className={"items"}>
                        Home
                    </Link>
                  </li>
                  
  
                  <li className={`nav-item`}>
                    <div className={"items"}>
                      <Dropdown className={"mydropdown"}>
                        <Dropdown.Toggle className="my-dropdown_nav">
                          Search For Property
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="my-dropdown">
                           {/* <Dropdown.Item href="/let">
                            Property To let
                          </Dropdown.Item> */}
                          <Dropdown.Item href="/sales">
                            Property For Sale
                          </Dropdown.Item>
                          {/* <Dropdown.Item href="/projects">
                            Off Plan Projects
                          </Dropdown.Item> */}
                        </Dropdown.Menu>
                      </Dropdown>
                      </div> 
                 </li> 
                  <li className="nav-item" >
                    <Link to="/about" className={"items"}>
                    
                        About Us
                      
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="#info" className={"items"}>
                        Contact Us
                    </a>
                  </li>
                  {/* <li className={`nav-item`}>
                    <Link to="/admin" className={"items"}>
                        Admin
                    </Link>
                  </li> */}
                </ul>

              </div>
            </div>
       
          </div>
        </nav>
      </div>
    );
  }
export default Navbar;
