import React from 'react'
import './Skills.css'
import html from '../../assets/html-icon.svg'
import css from '../../assets/css-icon.svg'
import bootstrap from '../../assets/bootstrap-5-icon.svg'
import tailwind from '../../assets/tailwind-css-icon.svg'
import javascript from '../../assets/javascript-icon.svg'
import reactjs from '../../assets/react-js-icon.svg'
import python from '../../assets/python-icon.svg'
import django from '../../assets/django-icon.svg'

function Skills() {
    return (
        <>
            <div id='skills' className="skills">
                <div className='skills-title'>
                    <p className='main-title'>SKILLS <i className="fa-solid fa-code gradiant"></i></p>

                </div>
                {/* <div className="skills-container">
                    <div className="skills-format"> <p>01</p>
                        <img src={html} alt="html" />
                        <p className='gradiant'>HTML</p></div>
                    <div className="skills-format"> <p>02</p>
                        <img src={css} alt="css" />
                        <p className='gradiant'>CSS</p></div>
                    <div className="skills-format"> <p>03</p>
                        <img src={bootstrap} alt="bootstrap" />
                        <p className='gradiant'>BOOT- STRAP</p></div>
                    <div className="skills-format"><p>04</p>
                        <img src={tailwind} alt="tailwind" />
                        <p className='gradiant'>TAILWIND CSS</p></div>
                    <div className="skills-format"> <p>05</p>
                        <img src={javascript} alt="javascript" />
                        <p className='gradiant'>JAVA SCRIPT</p></div>
                    <div className="skills-format"> <p>06</p>
                        <img src={reactjs} alt="reactjs" />
                        <p className='gradiant'>REACT JS</p></div>
                    <div className="skills-format"> <p>07</p>
                        <img src={python} alt="python" />
                        <p className='gradiant'>BASIC PYTHON</p></div>
                    <div className="skills-format"><p>08</p>
                        <img src={django} alt="django" />
                        <p className='gradiant'>BASIC DJANGO</p></div>

                </div> */}

                <div class="container d-grid gap-4 col-lg- skills-container">
                    <div class="row p-2 gap-3">
                        <div class="col gap-3">
                            <div className="skills-format"> <p className='skill-num'>01</p>
                                <div className="skill-img"><img src={html} alt="html" /></div>
                                <p className='gradiant'>HTML</p></div>
                        </div>
                        <div class="col">
                            <div className="skills-format"> <p>02</p>
                                <div className="skill-img"><img src={css} alt="css" /></div>
                                <p className='gradiant'>CSS</p></div>
                        </div>
                        <div class="col">
                            <div className="skills-format"> <p>03</p>
                                <div className="skill-img"><img src={bootstrap} alt="bootstrap" /></div>
                                <p className='gradiant'>BOOT- STRAP</p></div>
                        </div>
                        <div class="col">
                            <div className="skills-format"><p>04</p>
                                <div className="skill-img"><img src={tailwind} alt="tailwind" /></div>
                                <p className='gradiant'>TAILWIND CSS</p></div>
                        </div>
                    </div>
                    <div class="row p-2 gap-3 ">
                        <div class="col">
                            <div className="skills-format"> <p>05</p>
                                <div className="skill-img"><img src={javascript} alt="javascript" /></div>
                                <p className='gradiant'>JAVA SCRIPT</p></div>
                        </div>
                        <div class="col">
                            <div className="skills-format"> <p>06</p>
                                <div className="skill-img"><img src={reactjs} alt="reactjs" /></div>
                                <p className='gradiant'>REACT JS</p></div>
                        </div>
                        <div class="col">
                            <div className="skills-format"> <p>07</p>
                                <div className="skill-img"><img src={python} alt="python" /></div>
                                <p className='gradiant'>BASIC PYTHON</p></div>
                        </div>
                        <div class="col">
                            <div className="skills-format"><p>08</p>
                                <div className="skill-img"><img src={django} alt="django" /></div>
                                <p className='gradiant'>BASIC DJANGO</p></div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Skills