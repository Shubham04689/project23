import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from "../../assets/logo.jpeg"
import resume from "../../assets/Shubham-Kumar.pdf"

const resumeHandler=()=>{
  const link = document.createElement('a');
  link.href = resume;
  link.download = 'Shubham_Resume.pdf'; 
  link.click(); 
}

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={logo} alt="" className='profile-img' />
      <h1><span>I'm Shubham,</span> AI/ML Enthusiast, Data Engineer</h1>
      {/* <p>I am a Frontend developer, Competitive Programmer</p> */}
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <button className="hero-resume" onClick={resumeHandler}><div >My resume</div></button>
      </div>
    </div>
  )
}

export default Hero
