import React, { useState}  from 'react'
import "../styles/Footer.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { HiLocationMarker,HiPhone, HiMail  } from "react-icons/hi"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot, faFaceFrownOpen } from '@fortawesome/free-solid-svg-icons'
function Footer() {
  const [spiner, setSpiner] = useState({
   state: "none"
  })
  const [userState, setUserState] = useState(
    { name: "",
      email:""
    })
    const [formverify, setFormVerify] = useState(
      { formStatus: "" }) 
  const handleSubmit = async(e) => {
    e.preventDefault()
   
    const data = userState
    const dataSubmission = async () => {
      try {
        if (userState.email !== "" & userState.name !== "") {
          setSpiner({
            state: "block"
          })
         
          const dataSubmit = await axios.post("http://localhost:5000/subscribe",data)
         console.log(dataSubmit.data)
          if (dataSubmit.status === 200) {
            console.log(dataSubmit)
            setFormVerify({
              formStatus:`${dataSubmit.data}`
            })
            setSpiner({
              state: "none"
            })
          }else if(dataSubmit.status === 201 ){
               setFormVerify({
              formStatus:`form submission successfull`
               })
               setSpiner({
                state: "none"
              })
          } 
        
        }
      } catch (error) {
        console.log(error.message)
          setFormVerify({
            formStatus:`${error.message}`
          })
          setSpiner({
            state: "none"
          })
        }
      }
     
    dataSubmission()
    
   
  }
  return (
      <div className="container__footer container-fluid">
       <div className="wrapper">
        <div className="cols">
          <div className="title">
          <h3>About Vick Homes</h3>
            <span></span>
            </div>
          <span>
            Vick Homes has built its reputation on the
            abilities to respond quickly to opportunities
            in the market place by selling of real estate
            as cost effective as possible while maintaining
            the highest level of service with a history of
            positive performance on behalf of our clients.
          </span>
        
        </div>
        <div className="cols">
        <div className="title">
          <h3>Useful Links</h3>
          <span></span>
          </div>
          <div className="content">
            <Link to="/about">
                About Us
         </Link >
        <hr />
          </div>
          <div className="content">
            <Link to="/contact">
          
                Contact Us
             
         </Link >
          <hr />
          </div>
          <div className="content">
            <Link to="/event">
                News And Events
         </Link>
        <hr />
          </div>
        </div>
        <div className="cols">
        <div className="title">
          <h3>Contacts</h3>
          <span></span>
          </div>
          <div className="content">
          <span>   <FontAwesomeIcon icon={ faLocationDot } /></span>
          <span> Ajah </span>
          </div>
          <div className="content">
          <span> <FontAwesomeIcon icon={faPhone} /></span>
          <span>+234 9028506555</span>
          </div>
          <div className="content">
          <span> <FontAwesomeIcon icon={ faEnvelope} /></span>
            <span><a href="https://www.gmail.com">Vickshomess@g </a></span> 
          </div>
          <div className="content">
            <span> <img src="/imgs/icons/facebookIcon.png"
              width="20px" height="25px" 
            /></span>
            <span><a href="https://www.facebook.com/VeeksHomes/" target="_blank">Vick </a></span>
          </div>
          <div className="content">
            <span> <LazyLoadImage effect="blur" src="/imgs/icons/twitterIcon5.png" width="20px" height="25px"/></span>
            <span><a href="https://l.facebook.com/l.php?u=https%3A%2F%2Ftwitter.com%2Fvickshomess%3Fs%3D21%26fbclid%3DIwAR0AaefyyC2Q5Lmd5R17hiB3pVI9a8-wML7S8r63YMS8oZ28q3Zw8EaJZGw&h=AT3hPaTcm1yMTIaijNXf-hAy7Z1bwauMXWYoRquUZI8mMdGr-hLswrQGKzoepz-6Aa7AS7BPHtKRKvi7ySvcD-l6G9yNBYKpRpk-QIR6CpeaW_uD2EXrIfdXbPDwHw" target="_blank">@VicksHomes</a></span>
          </div>
          <div className="content">
            <span> <LazyLoadImage src="/imgs/icons/instagramIcon.png" width="20px" height="25px"/></span>
            <span><a href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fvickshomes%3Futm_medium%3Dcopy_link%26fbclid%3DIwAR01HhYqFJUJPdy5MUdtqoPy3gCF2FPjZN84hG9PAY8jnHO24wXlAP6lfwk&h=AT3hPaTcm1yMTIaijNXf-hAy7Z1bwauMXWYoRquUZI8mMdGr-hLswrQGKzoepz-6Aa7AS7BPHtKRKvi7ySvcD-l6G9yNBYKpRpk-QIR6CpeaW_uD2EXrIfdXbPDwHw" target="_blank">ViHomes</a></span>
          </div>
          <div className="content">
            <span> <LazyLoadImage src="/imgs/icons/linkedIn.png" width="20px" height="25px"/></span>
            <span><a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fvicks-homes%2F%3Ffbclid%3DIwAR0f-ClL_mJvPadzZFgUdTYxN_C37MyUnWGjiFyQ7fN-PdH6Pnco5Vq9Rm0&h=AT3hPaTcm1yMTIaijNXf-hAy7Z1bwauMXWYoRquUZI8mMdGr-hLswrQGKzoepz-6Aa7AS7BPHtKRKvi7ySvcD-l6G9yNBYKpRpk-QIR6CpeaW_uD2EXrIfdXbPDwHw" target="_blank">Vick </a></span>
          </div>
        </div>
        <div className="cols">
          <div className={ "title"}>
            <h3>
                news and events
            </h3>
            <div id="info">
            <form onSubmit={ handleSubmit }>
              <input type="text" placeholder="Your Name" onChange={(e) => {
                 setUserState({
                  ...userState, name: e.target.value 
                }
                )
              }}
              required={ true }/>
              <input type="email" placeholder="Your Email"
                onChange={(e) => {
                  setUserState({
                    ...userState, email: e.target.value
                  }
                  )
                }}
                  required={true} />
                { spiner.state === "block" ? <div class="spinner-border text-light" role="status" style={{
                  display:`${spiner.state}`
                }}>
                  <span class="sr-only">Loading...</span>
               </div> :
              <small style={{
                color: "red"
              }}>{ formverify.formStatus }</small>}
              <button type="submit"> Submit </button>
 
            </form>
            </div>
          </div>
        </div>
    </div>
    </div>
   
  )
}

export default Footer