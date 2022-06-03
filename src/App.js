import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/js/src/dropdown.js"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Sale from "./Pages/Sale";
import About from "./Pages/About";
import Home from "./Pages/Index";
import Navbar from "./components/Navbar"
function App() {
  return (
    <div className="myApp">
      <Router>
     
     <Routes>
   
       <Route path="/" element={
         <>
       <Navbar />
           <Home />
           <Footer /> 
        </>
      } /> 
   
     
       <Route path="/sales" element={
         <>
            <Navbar />
           <Sale />
           <Footer /> 
         </>
     } /> 
       <Route path="/about" element={
         <>
          <Navbar />
        <About />
        <Footer /> 
        </>
         
      } />
     <Route element={
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
