import "../styles/About.css";
import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import ToolTipDisplay from "../components/ToolTips";
import frontView from "../images/for__sale/flat1/flat1/frontview.webp"
// import { img } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';

function About({ word, heading }) {
 
    return (
      <div className={"container__about"}>
        <div className={"wrapperOuter"}>
          <div className={'wrapper'}>
            <div className={"pic"}>
              <img
                width="100%"
                height="100%"
                
                src={ frontView }
                // "https://drive.google.com/uc?export=view?&id=1LxHAwR_u5e91Hgdoaf8OSmGvmuilE2qO"
              />
            </div>
          </div>
          <div className={"content3"}>
            <div className={"wrapper__about"}>
              <h2>Who We Are</h2>
              <div className={"content4"}>
                <div className={"item__about"}>
                   <span>
                  </span> 
                  <span>
                    <AppsIcon />
                  </span>
                  <span>
                  </span>
                </div>
            
              </div>
              <div className={"text"}>
                <p>
                  We believe that our business is more than housing we are
                  building lives & nations in Africa.
                </p>
              </div>
            </div>
            <div className={"wrapper__about"}>
              <div className={"text"}>
                <p>
                  VicksHomes has built its reputation on the abilities to respond quickly
                  to opportunities in the market place by selling of real estate as cost
                  effective as possible while maintaining the highest level of service with a history of positive
                  performance on behalf of our clients. <br />
                  Our company is not confined by traditional real estate boundaries
                  when it comes to buying, selling, and renting asset management, instead we are always
                  coming up with new innovative ways to satisfy our client’s need and be the leading
                  company in the real estate industry.  <br />
                  Our team is hands-on when it comes to making sure
                  that all our properties are in good condition,
                  location and perfect view before showing it to the clients.
                  We also work continually to interpret and act upon economic forces in the marketplace.
                  And with every transaction, we stress on creative solving coupled with judicious
                  application of sound real estate principles.
                </p>
              </div>
              <div className={"carousel"}>
              <iframe  src="https://www.youtube.com/embed/cCGPBTHIBEg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
          </div>
          <div className={"content2"}>
            <div className={"wrapper__about"}>
              <div className={"mission"}>
                <span>
                  <div className={"pic"}>
                    <div className={"innerPic"}>
                    <img src="https://drive.google.com/uc?export=view?&id=1tujD5IdlnULU05xcAFJs3aVQ6zYbRP5l"  className={"logo"} alt="logo" />

                    </div>
                  </div>
                </span>
                <span>
                  <h2>Our Mission</h2>
                </span>
                <span>
                  <p>
                    "To provide comprehensive and integrated property services and solutions to landlords, buyers, developers and property investors that can favorably compete with other leading brands in the real estate industry."
                  </p>
                </span>
              </div>
              <div className={"vission"}>
                <span>
                  <div className={"pic"}>
                    <div className={"innerPic"}>
                    <img src="https://drive.google.com/uc?export=view?&id=15w34rPvmG_hIAv5pUCvYQLnt4Ncg-IUR"  className={"logo"} alt="icon" />
                    </div>    
                  </div>
                </span>
                <span>
                  <h2>
                    Our Vission
                  </h2>
                </span>
                <span>
                  <p>
                    "To be an outstanding real estate property management industry with authentic level of service on the basic of our core value of integrity and professionalism."
                  </p>
                </span>
              </div>
            </div>
          </div>
          <div className={"footer"}>
            <h2>OUR CORE VALUES</h2>
            <span>
            </span>
            <p>
              Our corevalues are derived from the level of trust we have built over the years with our clients.
            </p>
            <div className={"value1"}>
            <div className={"col1"}>
              <div className={"list"}>
                <span>
                    <div className={"pic"}>
                    
                    <img src="https://drive.google.com/uc?export=view?&id=15h7EHx1_O6XrAryJXYaLpclqxPFIAba7"  className={"logo"} alt="logo" />
                  </div>
                </span>
                <span>
                <p>
                <ToolTipDisplay heading="T-RUTHS" word={ <p> we never bend the truth for us to acheive our sales, we make sure that we always provide the truth when it comes to information of our properties.</p>} />
                  </p>
                </span>
                </div>
                <div className={"list"}>
                <span>
                  <div className={"pic"}>
                  <img src="https://drive.google.com/uc?export=view?&id=17QCHSZrhpBcjFglSHnuT5tf5pw684vl5"  className={"logo"} alt="logo" />                  </div>
                </span>
                <span>
                <p>
                <ToolTipDisplay heading="S-KILLED" word={ <p>We make sure that our teams are well built when it comes to attitude for us working together as a team.</p>} />
                  </p>
                </span>
              </div>
              
                </div>
             
              <div className={"col1"}>
              <div className={"list"}>
                <span>
                  <div className={"pic"}>
                  <img src="https://drive.google.com/uc?export=view?&id=1Ns5Pqsnf5lMP39dWAa-5COGJLB5T8Clx"  className={"logo"} alt="logo" />
                    </div>
                </span>
                <span>
                <p>
                <ToolTipDisplay heading="R-ESPONSIBLE" word={ <p> We make sure that the responsibilities of each member of our team are responsible enough to respond all the needs and enquiries of our clients in a professional way.</p>} />
                  </p>
                </span>
                </div>
            <div className={"list"}>
                <span>
                  <div className={"pic"}>
                  <img src="https://drive.google.com/uc?export=view?&id=1Hdw9iampFEQYCTkUSTSieJZ_zWh88ZhM"  className={"logo"} alt="logo" /> </div>
                </span>
                <span>
                  <p>
                  <ToolTipDisplay heading="T-EAMWORK" word={ <p>Our team of professional are well trained to ensure 100% satisfactions to our clients.</p>} />
                  </p>
                </span>
              </div>
   
             
              </div>
              <div className={"col1"}>
            <div className={"list"}>
                <span>
                  <div className={"pic"}>
                  <img src="https://drive.google.com/uc?export=view?&id=1pVVz2AOqEUMQak-m6rwqvcRcOWtkgDJo"  className={"logo"} alt="logo" /> </div>
                </span>
                <span>
                  <p>
                  <ToolTipDisplay heading="U-NDERSTANDING" word={ <p>understanding the client’s needs is one of the most important part of our customers service, by knowing what they need our team is always able to provide suggestions and recommendations to our clients. </p>} />
                  </p>
                </span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    

    );
  }

export default About;
