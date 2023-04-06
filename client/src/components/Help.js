import React, { useState } from "react";
import Navbar from './Navbar'
import Footer from "./Footer"
import "../style/help.css";

const FORM_ENDPOINT = ""; 

const Help = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <>
    <Navbar />
    
    <div className='contactUs' >
                <h6 className="d-flex align-items-center justify-content-center ">Contact Us </h6>
                <small className="d-flex align-items-center justify-content-center">For any query, Contact Us now.</small>
    <form
      action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST" target="_blank"
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

