import React, { useState } from 'react'
import Address from './Details/Address'
import Profile from './Details/Profile'
import Vehicle from './Details/Vehicle'
import Navbar from './Navbar'

const DriverIntro = () => {

  const [profile, setProfile] = useState(true);
  const [address, setAddress] = useState(false);
  const [vehicle, setVehicle] = useState(false);

  const handlesetPage = () => {
    setProfile(false);
    setAddress(true);
    setVehicle(false);
  }

  const handleVehicle = () => {
    setProfile(false);
    setAddress(false);
    setVehicle(true);
  }

  const handlesetProfile =()=>{
    setProfile(true);
    setAddress(false);
    setVehicle(false);
  }

  return (
    <>
      <Navbar />
      <div className='d-flex' >
        <div className='driver'>
          <span>Build Your Profile</span>
          <div  className='pav' >
            <span onClick={handlesetProfile} id='profile' >Profile Details</span>
          </div>
          <div className='pav' id='address' >
            <span  onClick={handlesetPage}>Address Details</span>
          </div>
          <div className='pav' >
            <span onClick={handleVehicle} >Vehicle Details</span>
          </div>
        </div>

        <div className='subpages'>
          {
            profile ? <Profile /> : ("")
          }
          {
            !address ? ('') : <Address />
          }
          {
            !vehicle ? ('') : <Vehicle />
          }
        </div>
      </div>

    </>
  )
}

export default DriverIntro
