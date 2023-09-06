import React from 'react'
import { FaTelegram,FaWhatsapp,
FaDiscord,FaFacebook, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";
function Footer() {
  return (
    <div className='footer'>
        <div className='socialmedia'>
        <FaTelegram/>
        <FaWhatsapp/>
        <FaFacebook/>
        <FaDiscord/>
        Contact: 677271237
        </div>

        <p> &copy; 2023 maximedoaw</p>
    </div>
  )
}

export default Footer
