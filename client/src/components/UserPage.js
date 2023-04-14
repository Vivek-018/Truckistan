import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import driverContext from './useContext/driverContext'
import '../style/user.css'
import Footer from "../components/Footer"
import { GoVerified } from 'react-icons/go';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EntryPage from './EntryPage'
import Comment from './Comment'

const UserPage = () => {
    const [show, setShow] = useState(12);
    AOS.init({
        offset: 120,
        delay: 0,
        duration: 1700,
    });
    const context = useContext(driverContext);
    const { alldata, getallData, getMOVERSTRUCKS,
        setOneData, gettruksTrans } = context;

    const length = alldata.length;

    const handleSetData = (item) => {
        setOneData(item);
    }

    const handleIncrease = () => {
        let a = show + 6;
        setShow(a);
    }

    useEffect(() => {
        getallData();
        getMOVERSTRUCKS();
        gettruksTrans();
    }, [])

    return (
        <>
            <EntryPage />
            <div className='container' >
                <div className='heads text-center'>
                    <span>Featured Vehicle <hr /> </span>
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
                                            index < show ?
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

                                                        <div className='loadCapacity d-flex justify-content-between'>
                                                            <div>
                                                                <small href="#" className="card-link">Driver Name</small>
                                                            </div>
                                                            <div>
                                                                <small href="#" className=" mx-3 ">{item.name} {item.lname} </small>
                                                            </div>
                                                        </div>

                                                        <div className='my-4 ' >
                                                            <NavLink to={'/cart'} onClick={() => { handleSetData(item) }} state={item} className='btn-user' exact >Book</NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                                : ""
                                        }
                                    </>
                                )
                            })
                        }
                    </div>
                )
                }
            </div>

            <div className='showMore' >
                <button onClick={handleIncrease} className='btn-more'>More</button>
            </div>
            <Comment />
            <Footer />
        </>
    )
}

export default UserPage
