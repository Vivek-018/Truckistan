import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useLocation } from 'react-router-dom'

const ViewDetails = () => {
    const location = useLocation()
    return (
        <>

            <Navbar />
            <div className='container'>
                <div className='Alldetails' >
                    <h6 className='my-4' >Profile Details</h6>
                    <div className='showprofile' >
                        <div>
                            <span>Name</span> <br />
                            <small>{location.state?.name}</small>
                        </div>

                        <div>
                            <span>Last Name</span> <br />
                            <small>{location.state?.lname}</small>
                        </div>

                        <div>
                            <span>Gender</span> <br />
                            <small>{location.state?.gender}</small>
                        </div>

                        <div>
                            <span>Phone Number</span> <br />
                            <small>{location.state?.phone}</small>
                        </div>

                        <div>
                            <span>Date of Brith</span> <br />
                            <small>{location.state?.DOB}</small>
                        </div>
                    </div>


                    <h6 className='my-4' >Address Details</h6>
                    <div className='showprofile' >
                        <div>
                            <span>Permanent Address </span> <br />
                            <small>{location.state?.address}</small>
                        </div>

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


                    <h6 className='my-4' >Vehicle Details</h6>
                    <div className='showprofile' >

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


                    <h6 className='my-4' >Documents Details</h6>
                    <div className='showprofile'>

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
                </div>
            </div>
        </>
    )
}

export default ViewDetails
