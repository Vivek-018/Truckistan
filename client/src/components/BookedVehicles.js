import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import driverContext from './useContext/driverContext'

const BookedVehicles = () => {

    const context = useContext(driverContext);
    const { getbookedVehicles, booked, ChangeBooked } = context;
    const [Booked, setBooked] = useState("Cancel");


    const handleCancel = (id) => {
        ChangeBooked(Booked, id)
        alert("Your Booked Vehicle will be canceled successfully ")
        window.location.reload();
    }

    useEffect(() => {
        getbookedVehicles();
    }, [])

    return (
        <>
            <Navbar />

            <div className='container'>
                <div className='tableVerified'>
                    <h3 className='my-4' >Your Booking Status</h3>
                    <table>
                        <tr className='my-4' >
                            {/* <td>S.No</td> */}
                            <td>Pickup Address</td>
                            <td>DropOff Address</td>
                            <td>Date</td>
                            <td>Status</td>
                        </tr>

                        {booked?.map((item, i) => {
                            return (
                                <>
                                    {
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
