import React, { useState } from 'react'
import Address from './Details/Address'
import Profile from './Details/Profile'
import UploadDoc from './Details/UploadDoc'
import Vehicle from './Details/Vehicle'
import Navbar from './Navbar'

const DriverIntro = () => {

  const [profile, setProfile] = useState(true);
  const [address, setAddress] = useState(false);
  const [vehicle, setVehicle] = useState(false);
  const [uploaddoc, setUploaddoc] = useState(false);
  const [allData, setAllData] = useState({
    name: "",
    lname: "",
    gender: "",
    DOB: "",
    email: "",
    phone: "",
    PanCardNumber: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    basefare: "",
    bodysize: "",
    lodingCapacity: "",
    transName: "",
    Vnamber: "",
    DLnumber: "",
    RCnumber: "",
    PolutionCertificate: "",
    driverImage: "",
    VehicleImage: "",
    DLImage: "",
    RCImage: "",
  })

  const [Scity, setCity] = useState();

  console.log("city", Scity);
  console.log(allData)

  const handlesetPage = (e) => {
    e.preventDefault();
    setProfile(false);
    setAddress(true);
    setVehicle(false);
    setUploaddoc(false);
  }

  const handleVehicle = (e) => {
    e.preventDefault();
    setProfile(false);
    setAddress(false);
    setVehicle(true);
    setUploaddoc(false);
  }

  const handlesetProfile = (e) => {
    e.preventDefault();
    setProfile(true);
    setAddress(false);
    setVehicle(false);
    setUploaddoc(false);
  }

  const handleDocument = (e) => {
    setProfile(false);
    setAddress(false);
    setVehicle(false);
    setUploaddoc(true);
  }

  const SaveData = async () => {
    const data = await fetch('http://localhost:5000/driver/driverData', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "token": localStorage.getItem("token")
      },
      body: JSON.stringify({allData, Scity})
    })
    const res = await data.json()
    console.log(res)
  }

  return (
    <>
      <Navbar />
      <div className='d-flex'>
        <div className='driver'>
          <span className='topProfile' >Build Your Profile</span>
          <div className='pav' >
            <span onClick={handlesetProfile} id='profile' >Profile Details</span>
          </div>
          <div className='pav' id='address' >
            <span onClick={handlesetPage}>Address Details</span>
          </div>
          <div className='pav' >
            <span onClick={handleVehicle} >Vehicle Details</span>
          </div>
          <div className='pav' >
            <span onClick={handleDocument} >Upload Documents</span>
          </div>
        </div>

        <div className='subpages'>
          {
            profile ? <Profile data={allData} setData={setAllData} setAddress={setAddress} setProfile={setProfile} /> : ("")
          }
          {
            !address ? ('') : <Address setCity={setCity} data={allData} setData={setAllData} setVehicle={setVehicle} setAddress={setAddress} />
          }
          {
            !vehicle ? ('') : <Vehicle data={allData} setData={setAllData} setUploaddoc={setUploaddoc} setVehicle={setVehicle} />
          }
          {
            !uploaddoc ? ('') : <UploadDoc data={allData} setData={setAllData} SaveData={SaveData} />
          }
        </div>
      </div>

    </>
  )
}

export default DriverIntro
