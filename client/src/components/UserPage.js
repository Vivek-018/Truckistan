import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import driverContext from './useContext/driverContext'
import '../style/user.css'
import Footer from "../components/Footer"
import Carousal from './Carousal'
import { GoVerified } from 'react-icons/go';

const UserPage = () => {

    const context = useContext(driverContext);
    const { alldata, getallData } = context;

    const length = alldata.length;

    useEffect(() => {
        getallData();
    }, [])

    return (
        <>
            <Navbar />
            <Carousal />
            <div className='container' >
                {
                    length === 0 ? (
                        <div class="loader my-4 "></div>
                    ) : (
                        <div className='vehicleInfo'>
                            {
                                alldata?.map((item, index) => {
                                    return (
                                        <>
                                            <div key={index} className="card my-2 ">
                                                <div className="card-body">
                                                    <img src={item.VehicleImage} alt='img' />
                                                    <div className='TransName' >
                                                        <small className="card-title">{item.transName}</small>
                                                    </div>
                                                    <div className='verified' >
                                                             <small>{item.isVerified === true?
                                                             <>
                                                              <GoVerified/> "Verified"
                                                             </>
                                                              :
                                                              "Not Verified" }</small>
                                                        </div>
                                                    <div className='loadCapacity d-flex justify-content-between '>
                                                        <div>
                                                            <small href="#" className="card-link">Loading Capacity</small>
                                                        </div>
                                                        <div>
                                                            <small href="#" className=" mx-3 ">{item.lodingCapacity} </small>
                                                        </div>
                                                    </div>

                                                    <div className='loadCapacity d-flex justify-content-between'>
                                                        <div>
                                                            <small href="#" className="card-link">Base Fare</small>
                                                        </div>
                                                        <div>
                                                            <small href="#" className=" mx-3 ">{item.basefare} Rs/km</small>
                                                        </div>
                                                    </div>

                                                    <div className='my-2 ' >
                                                        <NavLink to={'/cart'} state={item} className='btn-user' exact >Book</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    )
                }
            </div>
            <Footer />
        </>
    )
}

export default UserPage
