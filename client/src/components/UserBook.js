import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './User/Footer'
import { useLocation } from 'react-router-dom'
import driverContext from './useContext/driverContext'
import { FaRegHandPointRight } from 'react-icons/fa';

const UserBook = () => {
    const context = useContext(driverContext)
    const { GetVehicleBy_id, getveh_id } = context
    const location = useLocation();
    const data = location.state?.item;

    useEffect(() => {
        GetVehicleBy_id(data)
    }, [])

    return (
        <>
            <Navbar />
            <div className='container' >
                <div className='userbook'>
                    <div>
                        <span>Transportation Name</span><br />
                        <small>{getveh_id?.transName}</small>
                    </div>
                    <div>
                        <span>Driver Name</span><br />
                        <small>{getveh_id?.name} {getveh_id?.lname}</small>
                    </div>
                    <div>
                        <span>Phone Number</span><br />
                        <small>{getveh_id?.phone}</small>
                    </div>
                    <div>
                        <span>Vehicle Number</span><br />
                        <small>{getveh_id?.Vnamber}</small>
                    </div>
                    <div>
                        <span>Loding Capacity</span><br />
                        <small>{getveh_id?.lodingCapacity} Ton</small>
                    </div>
                    <div>
                        <span>Fare Base</span><br />
                        <small>{getveh_id?.basefare} Rs/km</small>
                    </div>
                </div>
            </div>

            <div className='container' >
                <h5>Note</h5>
                <div className='notesforuser' >
                    <span> <small className='handicon'  ><FaRegHandPointRight /> </small></span><br />
                    <span> <small className='handicon'  ><FaRegHandPointRight /> </small> Hii this is jefjsdklllll </span><br />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default UserBook
