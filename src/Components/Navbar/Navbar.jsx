import React, { useRef } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
import logo from '../../assets/Vikram7.png'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

function Navbar() {

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }


  return (
    <>

    <div className='navbar'>
        <img src={logo} alt="" className='nav-logo' />
        <img src={menu_open} onClick={openMenu} alt="menu_open" className='nav-mob-open' />

        <ul ref={menuRef} className='nav-menu'>
          <img src={menu_close} alt="menu_close" className="nav-mob-close" onClick={closeMenu} />
            <li><AnchorLink className='anchor-link' href='#home'>Home</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'>About Me</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#skills'>Skills</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#mywork'>Portfolio</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink></li>
        </ul>
        <div className='nav-connect'><AnchorLink className='anchor-link2' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>

    </>
  )
}

export default Navbar