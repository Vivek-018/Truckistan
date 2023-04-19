import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import driverContext from './useContext/driverContext'

const BookedVehicles = () => {

    const context = useContext(driverContext);
    const { getbookedVehicles, booked, ChangeBooked,
        getbookedAdminSide } = context;
    const [Booked, setBooked] = useState("Cancel");
    const userType = localStorage.getItem("type")

    // console.log(booked, "booked")

    const handleCancel = (id) => {
        ChangeBooked(Booked, id)
        alert("Your Booked Vehicle will be canceled successfully ")
        window.location.reload();
    }

    useEffect(() => {
        if (userType === "user") {
            getbookedVehicles();
        } else if (userType === "admin") {
            getbookedAdminSide();
        }
    }, [])

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='tableVerified'>
                    <h3 className='my-4' >Your Booking Status</h3>
                    <table>
                        <tr className='my-4' >
                            <td>Pickup Address</td>
                            <td>DropOff Address</td>
                            <td>Date</td>
                            <td>Status</td>
                        </tr>
                        {booked?.map((item, i) => {
                            return (
                                <>
                                    {
                                        userType === "user" || userType === "Driver" ?
                                            item.status === "Booked" || item.status === "Cancel" ?
                                                <tr key={i} className='trtd' >
                                                    {/* <td>{i + 1} </td> */}
                                                    <td>{item.pickupAddress}</td>
                                                    <td>{item.DropOffAddress}</td>
                                                    <td>{item.date.slice(0, 10)}</td>
                                                    <td>{item.status}</td>
                                                    {/* <td><NavLink to={'/viewdetails'} className='btn-view'>View</NavLink></td>
                                                    <td><button className='btn-view' >abg</button> </td> */}
                                                    <td><button className='btn-delete' onClick={() => handleCancel(item.vehicleId)} >Cancel</button></td>
                                                </tr>
                                                : ("")
                                            :
                                            <tr key={i} className='trtd' >
                                                {/* <td>{i + 1} </td> */}
                                                <td>{item.pickupAddress}</td>
                                                <td>{item.DropOffAddress}</td>
                                                <td>{item.date.slice(0, 10)}</td>
                                                <td>{item.status}</td>
                                                {/* <td><NavLink to={'/viewdetails'} className='btn-view'>View</NavLink></td>
                                                    <td><button className='btn-view' >abg</button> </td> */}
                                                <td><button className='btn-delete' onClick={() => handleCancel(item.vehicleId)} >Cancel</button></td>
                                            </tr>
                                    }
                                </>
                            )
                        })
                        }
                    </table>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default BookedVehicles
