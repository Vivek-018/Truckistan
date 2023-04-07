import React, { useState } from "react";
import Navbar from './Navbar'
import Footer from "./Footer"
import "../style/help.css";
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { BsInstagram } from 'react-icons/bs'
import { MdOutlineEmail } from 'react-icons/md'

const Help = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_fjd2pik', 'template_bxk3iwb', form.current, 'nct4zlPRNBqfUqJZf')

  }
  return (
    <>
      <Navbar />
      <section id="contact">
        <div className='container contact_conatiner'>

          <div className='contact_options'>
            <article className='contact_option'>
              <MdOutlineEmail className='contact_option-icon' />
              <h4>Email</h4>
              <h6>dc035534@gmail.com</h6>
              <a href="mailto:dc035534@gmail.com" target="_blank">Send a message</a>
            </article>

            <article className='contact_option'>
              <BsInstagram className='contact_option-icon' />
              <h4>Instagram</h4>
              <h5>Any Quary</h5>
              <a href='https://www.instagram.com/_durgesh.chaudhary/' target="_blank">Send a message</a>
            </article>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'> Send Message</button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Help;

