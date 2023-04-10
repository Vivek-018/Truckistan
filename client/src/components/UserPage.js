import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'
import driverContext from './useContext/driverContext'
import '../style/user.css'
import Footer from "../components/Footer"
import Carousal from './Carousal'
import { GoVerified } from 'react-icons/go';
import AOS from 'aos';
import 'aos/dist/aos.css';

const UserPage = () => {
    AOS.init({
        offset: 120,
        delay: 0,
        duration: 1700,
    });
    const context = useContext(driverContext);
    const { alldata, getallData, getMOVERSTRUCKS,
        moTrucks, ontruks, setOneData, gettruksTrans } = context;

    const length = alldata.length;
    const len = moTrucks?.length;
    const l = ontruks?.length;

    const handleSetData = (item) => {
        setOneData(item);
    }

    useEffect(() => {
        getallData();
        getMOVERSTRUCKS();
        gettruksTrans();
    }, [])

    return (
        <>
            <Navbar />
            <Carousal />
            <div className='container' data-aos="fade-up" >
                <div className='heads'>
                    <span>Movers Trucks</span>
                </div>
                { len === 0 || len === undefined ? (
                        <div class="loader my-4 "></div>
                    ) : (
                        <div className='vehicleInfo'>
                            {
                                moTrucks?.map((item, index) => {
                                    return (
                                        <>
                                            <div key={index} className="card my-2 ">
                                                <div className="card-body">
                                                    <img src={item.VehicleImage} alt='img' />
                                                    <div className='TransName' >
                                                        <small className="card-title">{item.transName}</small>
                                                    </div>
                                                    <div className='verified' >
                                                        <small>{item.isVerified === true ?
                                                            <>
                                                                <GoVerified /> "Verified"
                                                            </>
                                                            :
                                                            "Not Verified"}</small>
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
                                                        <NavLink to={'/cart'} state={item} onClick={() => { handleSetData(item) }} className='btn-user' exact >Book</NavLink>
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


            <div className='container' data-aos="fade-up" >
                <div className='heads' >
                    <span>ON ROAD EXPRESS</span>
                </div>
                {l === 0 || l === undefined ? (
                    <div class="loader my-4 "></div>
                ) : (
                    <div className='vehicleUsers'>
                        {
                            ontruks?.map((item, index) => {
                                return (
                                    <>
                                        <div key={index} className="card my-2 ">
                                            <div className="card-body">
                                                <img src={item.VehicleImage} alt='img' />
                                                <div className='TransName' >
                                                    <small className="card-title">{item.transName}</small>
                                                </div>
                                                <div className='verified' >
                                                    <small>{item.isVerified === true ?
                                                        <>
                                                            <GoVerified /> "Verified"
                                                        </>
                                                        :
                                                        "Not Verified"}</small>
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
                                                    <NavLink to={'/cart'} onClick={() => { handleSetData(item) }} className='btn-user' exact >Book</NavLink>
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

            <div className='container' data-aos="fade-up" >
                <div className='heads' >
                    <div>
                        <span>Others</span>
                    </div>
                </div>
                {length === 0 || length === undefined ? (
                    <div class="loader my-4 "></div>
                ) : (
                    <div className='vehicleOthers'>
                        {
                            alldata?.map((item, index) => {
                                return (
                                    <>
                                        {
                                            item.transName === "MOVERS TRUCKS" || item.transName === "ON ROAD EXPRESS" ? "" :

                                                <div key={index} className="card my-2 ">
                                                    <div className="card-body">
                                                        <img src={item.VehicleImage} alt='img' />
                                                        <div className='TransName' >
                                                            <small className="card-title">{item.transName}</small>
                                                        </div>
                                                        <div className='verified' >
                                                            <small>{item.isVerified === true ?
                                                                <>
                                                                    <GoVerified /> "Verified"
                                                                </>
                                                                :
                                                                "Not Verified"}</small>
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
                                                            <NavLink to={'/cart'} onClick={() => { handleSetData(item) }} className='btn-user' exact >Book</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                        }
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
