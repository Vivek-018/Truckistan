import React from 'react'
import '../style/driver.css'
import Navbar from './Navbar'
import Search from './Search'
import pic from '../images/Logo.png'

const DriverPage = () => {

    return (
        <>
            <Navbar />
            <div className='container my-2'>
                <Search />
                <h6>Added Details </h6>

                <div className='d-flex justify-content-around'>
                    <div className="card my-4 ">
                        <div className="card-body">
                            <img src={pic} alt='img' />
                            <div className='TransName' >
                                <small className="card-title">Durgesh Transpotation</small>
                            </div>
                            <div className='loadCapacity d-flex justify-content-between '>
                                <div>
                                    <small href="#" className="card-link">Loading Capacity</small>
                                </div>
                                <div>
                                    <small href="#" className=" mx-3 ">20 tons </small>
                                </div>
                            </div>

                            <div className='loadCapacity d-flex justify-content-between'>
                                <div>
                                    <small href="#" className="card-link">Base Fare</small>
                                </div>
                                <div>
                                    <small href="#" className=" mx-3 ">110 Rs/km</small>
                                </div>
                            </div>

                            <div className='buttons text-center d-flex justify-content-between' >
                                <button className=' btn-card' >Edit</button>
                                <button className=' btn-card' >View</button>
                            </div>
                        </div>
                    </div>

                    <div className="card my-4 ">
                        <div className="card-body">
                            <img src={pic} alt='img' />
                            <div className='TransName' >
                                <small className="card-title">Durgesh Transpotation</small>
                            </div>
                            <div className='loadCapacity d-flex justify-content-between '>
                                <div>
                                    <small href="#" className="card-link">Loading Capacity</small>
                                </div>
                                <div>
                                    <small href="#" className=" mx-3 ">20 tons </small>
                                </div>
                            </div>

                            <div className='loadCapacity d-flex justify-content-between'>
                                <div>
                                    <small href="#" className="card-link">Base Fare</small>
                                </div>
                                <div>
                                    <small href="#" className=" mx-3 ">110 Rs/km</small>
                                </div>
                            </div>

                            <div className='buttons text-center d-flex justify-content-between' >
                                <button className=' btn-card' >Edit</button>
                                <button className=' btn-card' >View</button>
                            </div>
                        </div>
                    </div>

                    <div className="card my-4 ">
                        <div className="card-body">
                            <img src={pic} alt='img' />
                            <div className='TransName' >
                                <small className="card-title">Durgesh Transpotation</small>
                            </div>
                            <div className='loadCapacity d-flex justify-content-between '>
                                <div>
                                    <small href="#" className="card-link">Loading Capacity</small>
                                </div>
                                <div>
                                    <small href="#" className=" mx-3 ">20 tons </small>
                                </div>
                            </div>

                            <div className='loadCapacity d-flex justify-content-between'>
                                <div>
                                    <small href="#" className="card-link">Base Fare</small>
                                </div>
                                <div>
                                    <small href="#" className=" mx-3 ">110 Rs/km</small>
                                </div>
                            </div>

                            <div className='buttons text-center d-flex justify-content-between' >
                                <button className=' btn-card' >Edit</button>
                                <button className=' btn-card' >View</button>
                            </div>
                        </div>
                    </div>

                    <div className="card my-4 ">
                        <div className="card-body">
                            <img src={pic} alt='img' />
                            <div className='TransName' >
                                <small className="card-title">Durgesh Transpotation</small>
                            </div>
                            <div className='loadCapacity d-flex justify-content-between '>
                                <div>
                                    <small href="#" className="card-link">Loading Capacity</small>
                                </div>
                                <div>
                                    <small href="#" className=" mx-3 ">20 tons </small>
                                </div>
                            </div>

                            <div className='loadCapacity d-flex justify-content-between'>
                                <div>
                                    <small href="#" className="card-link">Base Fare</small>
                                </div>
                                <div>
                                    <small href="#" className=" mx-3 ">110 Rs/km</small>
                                </div>
                            </div>

                            <div className='buttons text-center d-flex justify-content-between' >
                                <button className=' btn-card' >Edit</button>
                                <button className=' btn-card' >View</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default DriverPage
