import React, { useEffect } from 'react'
import '../style/driver.css'
import Navbar from './Navbar'
import Search from './Search'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import driverContext from './useContext/driverContext'
import { GoVerified } from 'react-icons/go';

const DriverPage = () => {
    const context = useContext(driverContext);
    const { getData, data } = context;
    var len = data.data?.length;
    // console.log(, "current")

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <Navbar />
            <div className='container durgeshdriver '>
                <Search />
                <h6>Added Details </h6>

                {len === 0 || len === undefined ? (
                    <>
                        <div class="loader my-4 "></div>
                        <div className='text-center' >
                            <h5> Currently Loading Your Data </h5>
                        </div>
                    </>
                ) : (

                    <div className='vehicleInfo'>
                        {
                            data.data?.map((item, index) => {
                                return (
                                    <>
                                        <div key={index} className="card my-2 ">
                                            <div className="card-body">
                                                {/* <img src={item.driverImage} alt='img' /> */}
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

                                                <div className='buttons text-center d-flex justify-content-between my-2 ' >
                                                    <NavLink to={'/editdetails'} state={item} className=' btn-card' exact >Edit</NavLink>
                                                    <NavLink to={'/viewdetails'} state={item} className=' btn-card' exact>View</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                )
                }
            </div>

            <div className='showMore' >
                <button className='btn-more'>More</button>
            </div>
        </>
    )
}

export default DriverPage
