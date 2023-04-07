import React, { useState } from "react";
import Navbar from './Navbar'
import Footer from "./Footer"
import "../style/help.css";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

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

