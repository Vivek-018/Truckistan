import React, { useState } from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'

const ViewDetails = () => {

    const [profile, setProfile] = useState(true);
    const [address, setAddress] = useState(false);
    const [vehicle, setVehicle] = useState(false);
    const [uploaddoc, setUploaddoc] = useState(false);
    const location = useLocation()

    const handlesetPage = (e) => {
        e.preventDefault();
        setProfile(true);
        setAddress(false);
        setVehicle(false);
        setUploaddoc(false);
    }

    const handlesetProfile = (e) => {
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

    const handleDocument = (e) => {
        setProfile(false);
        setAddress(false);
        setVehicle(false);
        setUploaddoc(true);
    }


    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='ManageBoth' >
                    <div className='vehicleimg' >
                        <img src={`${location.state?.VehicleImage}`} alt="img" /><br />
                        <div className='imagesText'>
                            <span >Your Information is secrued <br /> not public thanks for your Trust</span>
                        </div>
                    </div>
                    <div className='Alldetails' >
                        <div className='transName'>
                            <span>TransName</span>
                        </div>
                        <div className='smallnav'>
                            <small className='my-4' onClick={handlesetPage} >Profile Details</small>
                            <small className='my-4' onClick={handlesetProfile} >Address Details</small>
                            <small onClick={handleVehicle} className='my-4' >Vehicle Details</small>
                            <small className='my-4' onClick={handleDocument} >Documents Details</small>
                        </div>

                        {
                            profile === true ? (
                                <div className='showprofile' >
                                    <h6 className='my-4' >Personal Details</h6>
                                    <div className='personal' >
                                        <div>
                                            <span>Name</span> <br />
                                            <small>{location.state?.name}</small>
                                        </div>

                                        <div>
                                            <span>Last Name</span> <br />
                                            <small>{location.state?.lname}</small>
                                        </div>

                                        <div>
                                            <span>Date of Brith</span> <br />
                                            <small>{location.state?.DOB}</small>
                                        </div>
                                    </div>

                                    <div className='my-2 gender ' >
                                        <span>Gender</span> <br />
                                        <small>{location.state?.gender}</small>
                                    </div>

                                    <h6 className='my-4' >Contect Details</h6>
                                    <div className='contect' >
                                        <div>
                                            <span>Phone Number</span> <br />
                                            <small>{location.state?.phone}</small>
                                        </div>
                                        <div>
                                            <span>Email Id</span> <br />
                                            <small>{location.state?.phone}</small>
                                        </div>

                                    </div>

                                </div>
                            ) : ("")
                        }

                        {
                            address === true ? (
                                <div className='addressSection'>
                                    <div>
                                        <span>Permanent Address </span> <br />
                                        <small>{location.state?.address}</small>
                                    </div>

                                    <div className='locationDetails' >
                                        <div>
                                            <span>City</span><br />
                                            <small>{location.state?.city}</small>
                                        </div>

                                        <div>
                                            <span>State</span><br />
                                            <small>{location.state?.state}</small>
                                        </div>

                                        <div>
                                            <span>Country</span> <br />
                                            <small>{location.state?.country}</small>
                                        </div>

                                    </div>
                                </div>
                            ) : ("")
                        }

                        {
                            vehicle === true ? (
                                <div className='Vehicle' >
                                    <div>
                                        <span>Base Fare</span><br />
                                        <small>{location.state?.basefare}</small>
                                    </div>

                                    <div>
                                        <span>Body Size</span><br />
                                        <small>{location.state?.bodysize}</small>
                                    </div>

                                    <div>
                                        <span>Loading Capacity</span><br />
                                        <small>{location.state?.lodingCapacity}</small>
                                    </div>

                                    <div>
                                        <span>Vehicle Number</span><br />
                                        <small>{location.state?.Vnamber}</small>
                                    </div>

                                    <div>
                                        <span>DL Number</span><br />
                                        <small>{location.state?.DLnumber}</small>
                                    </div>

                                    <div>
                                        <span>RC number</span><br />
                                        <small>{location.state?.RCnumber}</small>
                                    </div>

                                    <div>
                                        <span>Polution Certificate</span><br />
                                        <small>{location.state?.PolutionCertificate ? "Yes" : "No"}</small>
                                    </div>
                                </div>
                            ) : ("")
                        }

                        {
                            uploaddoc === true ? (
                                <div className='ImagesItem'>

                                    <div>
                                        <span>Driver Photo</span><br />
                                        <a href={`${location.state?.driverImage}`} target='_blank' >View</a>
                                    </div>

                                    <div>
                                        <span>Vehicle Image</span><br />
                                        <a href={`${location.state?.VehicleImage}`} target='_blank' >View</a>
                                    </div>

                                    <div>
                                        <span>DL Image</span><br />
                                        <a href={`${location.state?.DLImage}`} target='_blank' >View</a>
                                    </div>

                                    <div>
                                        <span>RC Image</span><br />
                                        <a href={`${location.state?.RCImage}`} target='_blank' >View</a>
                                    </div>
                                </div>
                            ) : ('')
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewDetails
