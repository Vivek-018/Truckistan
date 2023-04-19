import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useLocation, Link } from 'react-router-dom';
import driverContext from './useContext/driverContext';

const ViewDetails = () => {
    const context = useContext(driverContext);
    const { UsersDataBYId, UserName } = context;
    const [profile, setProfile] = useState(true);
    const [address, setAddress] = useState(false);
    const [vehicle, setVehicle] = useState(false);
    const [uploaddoc, setUploaddoc] = useState(false);
    const location = useLocation()
    const driverData = location.state;

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

    useEffect(() => {
        UsersDataBYId(driverData.driverId);
    }, [])

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='ManageBoth' >

                    <div className='vehicleimg' >
                        <img src={`${location.state?.driverImage}`} alt="img" /><br />
                        <div className='text-center my-2 ' >
                            <span  >{location.state?.name}</span>
                        </div>
                        <img src={`${location.state?.VehicleImage}`} className='my-4' alt="img" /><br />

                        <div className='text-center my-1 ' >
                            <span  >{location.state?.transName}</span>
                        </div>

                        <div className='imagesText'>
                            <span >Your Information is secrued <br />not public thanks for your Trust</span>
                        </div>
                    </div>

                    <div className='Alldetails' >
                        <div className='transName'>
                            <span>TransName</span>
                        </div>
                        <div className='smallnav'>
                            <small  onClick={handlesetPage} >Profile Details</small>
                            <small  onClick={handlesetProfile} >Address Details</small>
                            <small onClick={handleVehicle} >Vehicle Details</small>
                            <small onClick={handleDocument} >Documents Details</small>
                        </div>

                        {profile === true ? (
                            <>
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
                                            {
                                                UserName.map((item, i) => {
                                                    return (
                                                        <small key={i} >{item.phone}</small>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div>
                                            <span>Email Id</span> <br />
                                            {
                                                UserName.map((item, i) => {
                                                    return (
                                                        <small key={i} >{item.email}</small>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className='my-4 text-center ' >
                                    <button onClick={handlesetProfile} className='save-btn'>Next</button>
                                </div>
                            </>
                        ) : ("")
                        }

                        {
                            address === true ? (
                                <>

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
                                        <div className='my-4' >
                                            <span>Cities</span><br />
                                            {
                                                driverData?.Scity.map((item, i) => {
                                                    return (
                                                        <>
                                                            <small className='mx-2' >{i + 1}  {item.city}</small>
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>

                                    <div className='my-4 text-center ' >
                                        <button onClick={handleVehicle} className='save-btn'>Next</button>
                                    </div>
                                </>

                            ) : ("")
                        }

                        {
                            vehicle === true ? (

                                <>

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

                                    <div className='my-4 text-center ' >
                                        <button onClick={handleDocument} className='save-btn'>Next</button>
                                    </div>
                                </>
                            ) : ("")
                        }

                        {
                            uploaddoc === true ? (

                                <>
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
                                    <div className='my-4 text-center'>
                                        <Link to={"/driver"} className='save-btn'>Go to Home</Link>
                                    </div>
                                </>
                            ) : ('')
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewDetails
