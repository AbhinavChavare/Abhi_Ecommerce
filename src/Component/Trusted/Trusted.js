import React from 'react'
import "./Trusted.css"
import { FcCdLogo } from "react-icons/fc";
import { IoLogoClosedCaptioning } from "react-icons/io";
import { IoLogoSass } from "react-icons/io";
import { IoIosAirplane } from "react-icons/io";
import { IoLogoYen } from "react-icons/io";

const Trusted = () => {
  return (
    <div>
    <div className='Truscon flex-column-center'>

      <h3>Trusted By 1000+ Companies</h3>
      <div className=' flex-center' >
        {/* <img className="trus-logo-mar" ><IoIosAddCircle/></img> */}
        <div className="trus-logo-mar" > <FcCdLogo/></div>
        <div className="trus-logo-mar" > <IoLogoClosedCaptioning/></div>
        <div className="trus-logo-mar" > <IoLogoSass/></div>
        <div className="trus-logo-mar" > <IoIosAirplane/></div>
        <div className="trus-logo-mar" > <IoLogoYen/></div>
              
      </div>
    </div>
    </div>
  )
}

export default Trusted
