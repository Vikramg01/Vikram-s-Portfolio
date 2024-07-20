import React from 'react'
import './Footer.css'
import Vikram from '../../assets/Vikram7.png'
function Footer() {
  return (
    <>
      <div id='footer' className="footer">
        <div className="footer-logo">
          <img src={Vikram} alt="" />
        </div>
        <div className="vertical-line"></div>
        <div className="footer-social">
          <a href='https://www.linkedin.com/in/vikram-gohel-6a7725285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blank'><i class="fa-brands fa-linkedin-in gradiant"></i></a>
          <a href='https://github.com/Vikramg01' target='_blank'><i class="fa-brands fa-github gradiant"></i></a>
          <a href='tel:9104573453'><i class="fa-solid fa-phone gradiant"></i></a>
        </div>

      </div>
    </>
  )
}

export default Footer