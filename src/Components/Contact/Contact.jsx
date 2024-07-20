import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

function Contact() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "539dab7b-04d0-4169-8353-e3f41cec2b4d");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            //   console.log("Success", res);
            alert(res.message);
        }
    };


    return (
        <>
            <div id='contact' className="contact">
                <div className="contact-title">
                    <h3>Get in touch</h3>
                    <img src={theme_pattern} alt="theme_pattern" />
                </div>
                <div className="contact-section">
                    <div className="contact-left">
                        <h3>Let's talk</h3>
                        <p>I'm currently avaliable to take on new work, so You can contact anytime</p>
                        <div className="contact-details">
                            <div className="contact-detail">
                                <img src={mail_icon} alt="" /> <p>vikramgohel28@gmail.com</p>
                            </div>
                            <div className="contact-detail">
                                <img src={call_icon} alt="" /> <p>9104573453</p>
                            </div>
                            <div className="contact-detail">
                                <img src={location_icon} alt="" /><p>Ahmedabad,Gujarat</p>
                            </div>
                            <div className="contact-social">
                                <a href="https://www.linkedin.com/in/vikram-gohel-6a7725285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><i class="fa-brands fa-linkedin-in gradiant"></i></a>
                                <a href="https://github.com/Vikramg01" target='_blank'><i class="fa-brands fa-github gradiant"></i></a>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} action="" className="contact-right">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" placeholder='Enter Your Name' id='name' name='name' />
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" placeholder='Enter Your email' name='email' />
                        <label htmlFor="msg">Write your message here</label>
                        <textarea name="message" id="msg" rows="8" placeholder='Enter Your message here'></textarea>
                        <button type="submit" className='contact-submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact