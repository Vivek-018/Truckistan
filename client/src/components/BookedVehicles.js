import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'
import driverContext from './useContext/driverContext'

const BookedVehicles = () => {

    const context = useContext(driverContext);
    const { getbookedVehicles, booked } = context;

    useEffect(() => {
        getbookedVehicles();
    }, [])

    return (
        <>
            <Navbar />

            <div className='container'>
                <div style={{ paddingTop: "4rem", paddingBottom: "4rem" }} className='tableVerified'>
                    <h3 className='my-4' >Your Booking Status</h3>
                    <table>
                        <tr className='my-4' >
                            <td>S.No</td>
                            <td>Pickup Address</td>
                            <td>DropOff Address</td>
                            <td>Status</td>
                        </tr>
                        {
                            booked?.map((item, i) => {
                                console.log(item)
                                return (
                                    <>
                                        {
                                            item.status === "Booked" ?
                                                <tr key={i} className='trtd' >
                                                    <td>{i + 1} </td>
                                                    <td>{item.pickupAddress}</td>
                                                    <td>{item.DropOffAddress}</td>
                                                    <td>{item.status}</td>
                                                    <td><NavLink to={'/viewdetails'} className='btn-view'>View</NavLink></td>
                                                    <td><button className='btn-view' >abg</button> </td>
                                                    <td><button className='btn-delete'>Cancel</button></td>
                                                </tr>
                                             :("")
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
