import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile2.png'
import linkedin from "../../assets/linkedin.png"
import twitter from "../../assets/twitter.png"
import coding from "../../assets/coding.png"
import github from "../../assets/github.png"



const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" /> 
            <div className="social-media">
              <a href="https://www.linkedin.com/in/shubham04689/"><img src={linkedin}/></a>
              <a href="https://x.com/shubham04689"><img src={twitter}/></a>
              <a href="https://github.com/Shubham04689"><img src={github}/></a>
              
              </div>   
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>As an AI/ML engineer with a knack for creativity and a passion for problem-solving, I thrive on tackling complex challenges that bridge the gap between artificial intelligence, machine learning, and real-world applications.</p>
                <p>With a proven track record of collaborating with forward-thinking communities, I'm dedicated to crafting innovative solutions that make AI/ML more accessible and user-friendly for the masses.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>Python, Pandas, Numpy, Tensorflow </p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>SQL</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Deep learning, Pytorch</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>ML algorithms, OpenCV</p><hr style={{width:"75%"}} /></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
