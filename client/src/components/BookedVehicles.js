import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './User/Footer'
import driverContext from './useContext/driverContext'
import { toast } from 'react-toastify';
import '../style/admin.css'
import { FaRegThumbsUp } from 'react-icons/fa';

const BookedVehicles = () => {
    const context = useContext(driverContext);
    const { getbookedVehicles, booked, ChangeBooked,
        getbookedAdminSide, getbookedDriverSide } = context;
    const [Booked, setBooked] = useState("Cancel");
    const userType = localStorage.getItem("type")
    const [id, setId] = useState();

    const handleCancel = (id) => {
        setId(id)
        document.getElementById("Modal").style.display = "block";
    }

    useEffect(() => {
        if (userType === "user") {
            getbookedVehicles();
        } else if (userType === "admin") {
            getbookedAdminSide();
        } else {
            getbookedDriverSide();
        }
    }, [])

    function CloseModal() {
        document.getElementById("Modal").style.display = "none";
    }

    const handleVerified = () => {
        ChangeBooked(Booked, id)
        document.getElementById("Modal").style.display = "none";
        toast("Canceled successfully", {
            autoClose: 1500,
        })
        if (userType === "user") {
            getbookedVehicles();
        } else if (userType === "admin") {
            getbookedAdminSide();
        } else {
            getbookedDriverSide();
        }
    }

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='tableVerified'>
                    <h3 className='my-4' >Your Booking Status</h3>
                    <table>
                        <tr className='my-4' >
                            {
                                userType === 'admin' ?
                                    <>
                                        <td>S.No</td>
                                    </> : ("")
                            }
                            {/* <td>Driver Name</td>
                            <td>Vehicle Number</td> */}
                            <td>Pickup Address</td>
                            <td>DropOff Address</td>
                            <td>Date</td>
                            <td>Phone Number</td>
                            <td>Status</td>
                        </tr>

                        {booked?.length === 0 || booked === undefined ?
                            <div class="loader my-4 "></div> :
                            booked?.map((item, i) => {
                                return (
                                    <>
                                        {userType === "user" || userType === "Driver" ?
                                            item.status === "Booked" || item.status === "Cancel" ?
                                                <tr key={i} className='trtd' >
                                                    {/* <td>{i + 1} </td> */}
                                                    {/* <VehicleDriver item={item} /> */}
                                                    <td>{item.pickupAddress}</td>
                                                    <td>{item.DropOffAddress}</td>
                                                    <td>{item.date.slice(0, 10)}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.status}</td>
                                                    {/* <td><NavLink to={'/viewdetails'} className='btn-view'>View</NavLink></td>
                                                    <td><button className='btn-view' >abg</button> </td> */}
                                                    {
                                                        item.status !== "Cancel" ?
                                                            <td><button className='btn-delete' onClick={() => handleCancel(item.vehicleId)} >Cancel</button></td>
                                                            : ("")
                                                    }
                                                </tr>
                                                : ("")
                                            :
                                            <tr key={i} className='trtd' >
                                                <td>{i + 1} </td>
                                                {/* <VehicleDriver item={item.vehicleId} /> */}
                                                <td>{item.pickupAddress}</td>
                                                <td>{item.DropOffAddress}</td>
                                                <td>{item.date.slice(0, 10)}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.status}</td>
                                                {/* <td><NavLink to={'/viewdetails'} className='btn-view'>View</NavLink></td>
                                                    <td><button className='btn-view' >abg</button> </td> */}

                                                {
                                                    item.status !== "Cancel" ?
                                                        <td><button className='btn-delete' onClick={() => handleCancel(item.vehicleId)} >Cancel</button></td>
                                                        : ("")
                                                }
                                            </tr>
                                        }
                                    </>
                                )
                            })
                        }
                    </table>
                </div>
            </div>

            <div id="Modal" className="modal">
                <div className="modal-content">
                    <span><FaRegThumbsUp /></span>
                    <h2>Your Are sure to Cancel It !</h2>
                    <div className='btn-modalm my-4'>
                        <button className='btn-view mx-4 ' onClick={CloseModal} >Close</button>
                        <button className='btn-view mx-4 ' onClick={handleVerified} >Submit</button> :
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default BookedVehicles
