import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Hero.css'
import vikram_dp from '../../assets/vikram_dp1.png'
import vikram_cv from '../../assets/Vikram_Resume.pdf'

function Hero() {
  return (
    <>
      <div id='home' className="hero">
        <div className="hero-img"><img src={vikram_dp} alt="profile_img" /></div>
        <h1><span>I'm Vikram Gohel,</span><br />Web Developer</h1>
        <p>With a passion for developing modern and creative web apps.</p>
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchor-link2' offset={50} href='#contact'>Connect with me</AnchorLink></div>
          <a href={vikram_cv} target='_blank'><div className="hero-resume">Download Resume</div></a>
        </div>
        <div className="hero-social">
          <a href="https://www.linkedin.com/in/vikram-gohel-6a7725285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><i class="fa-brands fa-linkedin-in gradiant"></i></a>
          <a href="https://github.com/Vikramg01" target='_blank'><i class="fa-brands fa-github gradiant"></i></a>
        </div>
      </div>
    </>
  )
}

export default Hero