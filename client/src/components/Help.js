import React, { useState } from "react";
import Navbar from './Navbar'
import Footer from "./Footer"
import "../style/help.css";
import { useRef } from 'react';
import emailjs from "emailjs-com";


const Help = () => {
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n9bvk1h', 'template_piiv417', form.current, 'QzRc0G0XM3lu7xxjZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    <Navbar />
    
    <div className='contactUs' >
                <h6 className="d-flex align-items-center justify-content-center ">Contact Us </h6>
                <small className="d-flex align-items-center justify-content-center">For any query, Contact Us now.</small>
    <form
      ref={form} onSubmit={sendEmail}
    >
      <div className="form-group d-flex align-items-center justify-content-center my-2">
        <input 
          type="text"
          placeholder="Your name"
          name="name"
        />
      </div>
      <div className="form-group d-flex align-items-center justify-content-center my-2">
        <input
          type="email"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="form-group d-flex align-items-center justify-content-center my-2">
        <textarea
          placeholder="Your message"
          name="message"
        />
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <button type="submit" class="btn btn-profile mx-2 my-3" >Send a Message</button>
      </div>
    </form>
    </div>
    
    
    <Footer />
    </>
  );
};

export default Help;

