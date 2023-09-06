import React from 'react'
import { FaTelegram,FaWhatsapp,
    FaDiscord,FaGithub, FaEnvelope } from "react-icons/fa";
import "../styles/Home.css" 

function Home() {
  return (
  
    <div className='home'>
       <div className="image" ></div>
      <div className='about'>Hi,My name is Doaw Maxime </div>
      <div className='prompt'>
        <p>
             and i am a software developer with a passion for learning and creating 
             
            <FaWhatsapp/>
            <a href="maximedoaw204@gmail.com"><FaEnvelope/></a>
           <a href="https://github.com/maximedoaw"><FaGithub/></a> 
        
        </p>
      </div>
      <div className='skills'>
       
          
        <h2>Technology:</h2>
        <span>
           HTMl,CSS,JAVASCRIPT,REACTJS,REDUX,BOOTSTRAP,  
        </span>
      </div>

    </div>
  )
}

export default Home
