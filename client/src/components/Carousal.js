import React from 'react'
import imgaes from '../images/Logo.png'
import "../style/carousal.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import pic from "../images/Free shipping-amico.svg"

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
      <div className=' container carD' data-aos="fade-up" >
      {/* <p>A Logistics Services provider offers complete solutions for the transportation of goods from large manufacturers or SMEs to the end customers and retailers. A logistics services provider is generally responsible for the management, storage & transportation of goods. At Vahak, you can find more than 10 Lakh+ logistics services provider who can help you transport goods at a reasonable rate.</p>   */}
      <img src={pic} style={{width:"30rem"}}></img>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e543c3" fill-opacity="1" d="M0,160L40,133.3C80,107,160,53,240,58.7C320,64,400,128,480,170.7C560,213,640,235,720,250.7C800,267,880,277,960,277.3C1040,277,1120,267,1200,229.3C1280,192,1360,128,1400,96L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,160L40,133.3C80,107,160,53,240,58.7C320,64,400,128,480,170.7C560,213,640,235,720,250.7C800,267,880,277,960,277.3C1040,277,1120,267,1200,229.3C1280,192,1360,128,1400,96L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}
      </div>
    </>
  )
}

export default Carousal