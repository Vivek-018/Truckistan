import React from 'react'
import imgaes from '../images/Logo.png'
import "../style/carousal.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Carousal = () => {
  AOS.init({
    offset: 50,
    delay: 0, 
    duration: 1700,
  });

  return (
    <>
      <div className='container'>
        <div className='imgpara' >
          <div className='Text' data-aos="fade-down-right">
            <div className='textone' ><span>This Is Our Shared</span></div>
            <div className='textsecond' ><span>Vision and Mission</span></div>
            <div className='textthird' ><small>We always deliver by using insurance so that the luggage <br/> is safe and prosperous. We are always focused on your convenience </small></div>
            <div className='textfourth' ><small>Always safe by being able to communicate with our logistics driver anywhere & anytime. </small></div>
            <button className='btn-start' to="form">Book Know</button>
          </div>
          <div className='img' data-aos="fade-down-left">
            <img src={imgaes} alt="images" ></img></div>
        </div>
      </div>
    </>
  )
}

export default Carousal