import React from 'react'
import { FaHandPointRight } from 'react-icons/fa';
import { GoVerified } from 'react-icons/go';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useLocation, useNavigate } from 'react-router-dom';


const VehicleDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state.dat;
    const Address = location.state.Address
    const handleDoneBookings = () => {
        alert("Vehicle Booked Successfully");
        navigate('/user')
    }

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='booked' >
                    <div className='truckbooked' >
                        <div className='userAdd text-center' >
                            <img
                                src={data?.VehicleImage}
                                alt='images' />
                        </div>
                        <div className='allDeatils ' >
                            <h3 className='my-4' >Vehicle Details</h3>
                            <div className='MoreVehicale' >
                                <div>
                                    <span className='backend' >Transportation :</span><br /><br />
                                    <span className='backend' >Verified :</span><br /><br />
                                    <span className='backend' >Driver Name :</span><br /><br />
                                    <span className='backend' >Cites :</span><br /><br />
                                    <span className='backend' >Body Size :</span><br /><br />
                                    <span className='backend' >Fair Parice :</span><br /><br />
                                    <span className='backend' >Loading capacity :</span><br /><br />
                                </div>

                                <div className='detailsV' >
                                    <span className='backend' >{data?.transName}</span><br /><br />
                                    <span className='backend' ><GoVerified />{data?.isVerified}</span><br /><br />
                                    <span className='backend' >{data?.name}</span><br /><br />
                                    <span className='backend' >citiy</span><br /><br />
                                    <span className='backend' >{data?.bodysize}</span><br /><br />
                                    <span className='backend' >{data?.basefare}</span><br /><br />
                                    <span className='backend' >{data?.lodingCapacity}</span><br /><br />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='address'>
                        <div className='text-center' >
                            <h2>Address Details</h2>
                        </div>
                        <div className='addressfull' >
                            <div>
                                <span className='backend' >From</span><hr />
                                <span className='backend' >Pickup address :</span><br /><br />
                                <span className='backend' >City :</span><br /><br />
                                <span className='backend' >Pincode :</span><br /><br />
                                <span className='backend' >To</span><hr />
                                <span className='backend' >DropOff Address :</span><br /><br />
                                <span className='backend' >City :</span><br /><br />
                                <span className='backend' >Pincode :</span><br /><br />
                                <span className='backend' >Others</span><hr />
                                <span className='backend' >Name :</span><br /><br />
                                <span className='backend' >Phone :</span><br /><br />
                                <span className='backend' >Your Requirements :</span><br /><br />
                            </div>

                            <div className='detailsV' >
                                <span className='backend' >{""}</span><br /><br />
                                <span className='backend' >{Address?.pickupAddress}</span><br /><br />
                                <span className='backend' >{Address?.Pcity}</span><br /><br />
                                <span className='backend' >{Address?.Ppincode}</span><br /><br />
                                <span className='backend' >{""}</span><br /><br />
                                <span className='backend' >{Address?.DropOffAddress}</span><br /><br />
                                <span className='backend' >{Address?.Dcity}</span><br /><br />
                                <span className='backend' >{Address?.Dpincode}</span><br /><br />
                                <span className='backend' >{""}</span><br /><br />
                                <span className='backend' >{Address?.name}</span><br /><br />
                                <span className='backend' >{Address?.phone}</span><br /><br />
                                <span className='backend' >{Address?.Req}</span><br /><br />
                            </div>
                        </div>
                    </div>

                    <div className='last-btn' >
                        <small className='my-2' > <FaHandPointRight /> <span>Please Read all the details carefully and than click to button </span></small>
                        <div className='text-center' >
                            <button className='cart-btn' onClick={handleDoneBookings} >Book Know</button>
                        </div>
                    </div>

                    <section id="contact">
                        <div className='text-center' >
                            <h2>Please Comments Something About Our Services </h2>
                        </div>
                        <div className='container contact_conatiner'>
                            <form >
                                <div className='text-center' >
                                    <textarea name='message' rows="7" placeholder='Your Comments' required></textarea>
                                    <button type='submit' className='btn-save'>Save</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default VehicleDetails