import React from "react"
import Sliders from '../components/Sliders'
import '../styles/HomePage.css'
import HomePage from "../components/HomePage"
export default function Home() {
  return (
    <div className={"container-fluid"}>
        <div className="index">
          <Sliders />
          <HomePage />
        </div>
    </div>
  )
}
