import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/js/src/dropdown.js"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux"


import Footer from "./components/Footer"
import Sale from "./Pages/Sale";
import About from "./Pages/About";
import Home from "./Pages/Index";
import Navbar from "./components/Navbar"
import { FaWhatsapp } from "react-icons/fa"
import "./styles/Whatsapp.scss"
import Login from "./Pages/Login"
import Admin from "./Pages/Admin"

function App() {
  const isLoggedIn = useSelector(state => state.propertyStore.isLoggedIn)
  console.log(isLoggedIn)
  return (
    <div className="myApp">
      <Router>
     
     <Routes>
   
       <Route path="/" element={
         <div  className="Whatsapp1">
       <Navbar />
           <Home />
              <Footer />
      <a href="http://wa.me/+2349028506555" target="_blank" rel="noreferrer"  className={ "chat"} >
            <FaWhatsapp color="darkblue" size="60px"/>
       </a>
        </div>
      } /> 
   
     
       <Route path="/sales" element={
          <div  className="Whatsapp1">
            <Navbar />
           <Sale />
              <Footer />
              <a href="http://wa.me/+2349028506555" target="_blank" rel="noreferrer"  className={"chat"} >
            <FaWhatsapp color="darkblue" size="60px"/>
       </a>
       </div>
     } /> 
       <Route path="/about" element={
         <div  className="Whatsapp1">
          <Navbar />
        <About />
              <Footer />
              <a href="http://wa.me/+2349028506555" target="_blank" rel="noreferrer"  className={"chat"} >
            <FaWhatsapp color="darkblue" size="60px"/>
       </a>
       </div>
         
          } />
          <Route path="/admin" element={
            isLoggedIn ? <Admin /> : <Login />
          }
          />
     <Route path="*" element={
       <h2>
         PAge not Found
       </h2>
     } />
       </Routes>

 </Router>

    </div>
      );
}

export default App;
