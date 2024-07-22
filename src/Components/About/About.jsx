import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt';
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import vikram_about from '../../assets/vikram_about.jpg'

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

function About() {

  const options = {
    scale: 1,
    speed: 500,
    max: 50,
  };

  return (
    <>
      <div id='about' className="about">
        <div className="about-title">
          <p>About me</p>
          <img src={theme_pattern} alt="theme_pattern" />
        </div>
        <div className="about-section">
        {/* <Tilt options={options} ><div className="about-left">
            <img src={vikram_about} alt="profile_img" />
          </div></Tilt> */}
          <div className="about-right">
            <div className="about-para">
              <p>Hi! <span className='gradiant'>I'm Vikram Gohel.</span>I'm from Ahmedbad.I completed my Graduation from Gujrat Univercity.I also done my <span className='gradiant'>Web Development</span> Course from Felix'Its in 2024</p>
              <p>Self-motivated and always trying to improve myself.Passionate web developer and enthusiast for my coading journey.</p>
              <p>apart from that I like to reading boooks, traveling, cooking, learning languages and doing gym.</p>
            </div>
           
          </div>
        </div>
      </div>
    </>
  )
}

export default About