import React, { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt';
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import react from '../../assets/react2.png'
import gym from '../../assets/gym1.png'
import food from '../../assets/food.png'
import arrow from '../../assets/arrow_icon.svg'


function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}



function MyWork() {

  const options = {
    scale: 1,
    speed: 1000,
    max: 50,
  };


  return (
    <>
      <div id='mywork' className="mywork">
        <div className="mywork-title">
          <h3>My latest Work</h3>
          <img src={theme_pattern} alt="theme_pattern" />
        </div>
        <div className="mywork-container">
          <Tilt options={options} className="tilt" ><div className="mywork-img"><img src={react} alt="" /></div></Tilt>
          <Tilt options={options} className="tilt" ><div className="mywork-img"><img src={gym} alt="" /></div></Tilt>
          <Tilt options={options} className="tilt" ><div className="mywork-img"><img src={food} alt="" /></div></Tilt>

        </div>
        <div className="mywork-showmore">
          <a href='https://github.com/Vikramg01' target='_blank'><p className='mywork-p'>Show More </p></a>
          <img src={arrow} alt="" />
        </div>
      </div>
    </>
  )
}

export default MyWork