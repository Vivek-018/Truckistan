import React from 'react'
import { FaHandPointRight } from 'react-icons/fa';
import { GoVerified } from 'react-icons/go';
import Navbar from '../Navbar';
import Footer from '../Footer';

const VehicleDetails = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='booked' >
                    <div className='truckbooked' >
                        <div className='userAdd text-center' >
                            <img
                                //  src={piv} 
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
                                    <span className='backend' >durgesh nano chat</span><br /><br />
                                    <span className='backend' ><GoVerified /> Yes</span><br /><br />
                                    <span className='backend' >Druesg</span><br /><br />
                                    <span className='backend' >Kanpur, Nonepur, tejpur</span><br /><br />
                                    <span className='backend' >10*10*20</span><br /><br />
                                    <span className='backend' >110 Rs/Km</span><br /><br />
                                    <span className='backend' >20 Tones</span><br /><br />
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
                                <span className='backend' >durgesh nano chat</span><br /><br />
                                <span className='backend' >Yes</span><br /><br />
                                <span className='backend' >123456789</span><br /><br />
                                <span className='backend' >{""}</span><br /><br />
                                <span className='backend' >Druesg</span><br /><br />
                                <span className='backend' >Kanpur, Nonepur, tejpur</span><br /><br />
                                <span className='backend' >123456789</span><br /><br />
                                <span className='backend' >{""}</span><br /><br />
                                <span className='backend' >10*10*20</span><br /><br />
                                <span className='backend' >110 Rs/Km</span><br /><br />
                                <span className='backend' >20 Tones</span><br /><br />
                            </div>
                        </div>
                    </div>

                    <div className='last-btn' >
                        <small className='my-2' > <FaHandPointRight /> <span>Please Read all the details carefully and than click to button </span></small>
                        <div className='text-center' >
                            <button className='cart-btn'>Book Know</button>
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
