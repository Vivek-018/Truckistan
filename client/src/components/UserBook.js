import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './User/Footer'
import { useLocation } from 'react-router-dom'
import driverContext from './useContext/driverContext'

const UserBook = () => {
    const context = useContext(driverContext)
    const { GetVehicleBy_id, getveh_id } = context
    const location = useLocation();
    const data = location.state?.item;

    useEffect(() => {
        GetVehicleBy_id(data?.vehicleId)
    }, [data])

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
                        <small>{getveh_id?.lodingCapacity}</small>
                    </div>
                    <div>
                        <span>Fare Base</span><br />
                        <small>{getveh_id?.basefare}</small>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default UserBook
