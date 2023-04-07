import React from 'react'
import imgaes from '../images/Logo.png'
import "../style/carousal.css";

const Carousal = () => {
    return (
        <>
      <div className='container'>
        <div className='imgpara' >
          <div className='Text' data-aos="fade-down-right">
            <div className='textone' ><span>This Is Our Shared</span></div>
            <div className='textsecond' ><span>Vision and Mission</span></div>
            <div className='textthird' ><small>1. We always deliver by using insurance so that the luggage is safe and prosperous </small></div>
            <div className='textfourth' ><small>2. Always safe by being able to communicate with our logistics driver anywhere & </small></div>
            <div className='textfourth' ><small>anytime. We are always focused on your convenience </small></div>
          </div>
            <div className='img' data-aos="fade-down-left">
            <img src={imgaes} alt="images" ></img></div>
        </div>
      </div>
        </>
    )
}

export default Carousal