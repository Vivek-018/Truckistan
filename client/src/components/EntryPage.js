import React, { useContext, useEffect, useState } from 'react'
import pic from '../images/Logo.png'
import { ImLocation2 } from 'react-icons/im';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const EntryPage = () => {
  AOS.init({
    offset: 120,
    delay: 0,
    duration: 1700,
  });

  const user = JSON.parse(localStorage.getItem("user"))
  const [fullnav, setfullnav] = useState(false);

  function openNav() {
    if (!fullnav) {
      document.getElementById("Sidenav").style.width = "100%";
      setfullnav(true);
    } else {
      document.getElementById("Sidenav").style.width = "0";
      setfullnav(false)
    }
  }

  function myFunction() {
    document.querySelector("#icon").classList.toggle("change");
  }

  const handleClear = () => {
    localStorage.clear();
  }

  return (
    <>

      <div className="entry-container">
        <div className="left-side-entry ">
          <div className="top-left d-flex align-items-center">
            <div className='text-center' data-aos="fade-right" >
              <div class="enter-container" id='icon' onClick={() => {
                openNav();
                myFunction();
              }
              }>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
              </div>
            </div>
          </div>
          <div className='images-entry' data-aos="fade-down" >
            <img className="entry-img my-4 " src={pic} alt="img" />
            {/* <h2>Welcome to Loadkro</h2> */}
          </div>
        </div>
      </div>

      <div className='entry-durgesh-img' data-aos="fade-up" >
        <div className='durgesh-enter' >
          <div className='seleted-entry' >
            <span>State</span> <br />
            <div className='location-entry' >
              <small><ImLocation2 /></small>
              <h6>Punjab</h6>
            </div>
          </div>

          <div className='entry-input' >
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder=" Search By City Name" aria-label="Recipient's username" aria-describedby="basic-addon2" />
              <button class="input-group-text entry-btn" id="basic-addon2">Search</button>
            </div>
          </div>
        </div>
      </div>

      <div id="Sidenav" class="fullsidenav text-center">
        <h2>Welcome to Loadkro</h2>
        <div className=' customerHelp'>
          <Link to="/book">Booked Vehicles</Link>
          <Link to="/help">FAQ's & Help</Link>
          <Link to="/login" onClick={handleClear} >Logout</Link>
        </div>
      </div>
    </>
  )
}

export default EntryPage
