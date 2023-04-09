import React, { useContext, useEffect } from 'react'
import Navbar from './Navbar'
import '../style/admin.css'
import driverContext from './useContext/driverContext'
import { NavLink } from 'react-router-dom'
import Search from './Search'
import { GoVerified } from 'react-icons/go';


const AdminPage = () => {
    const context = useContext(driverContext);
    const { alldata, getallData } = context;

    const length = alldata.length;

    useEffect(() => {
        getallData();
    }, [])

    return (
        <>
            <Navbar />
            <div className='container' >
                <Search />
                {
                    length === 0 ? (
                        <div class="loader my-4 "></div>
                    ) : (
                        <div className='vehicleInfo'>
                            {
                                alldata?.map((item, index) => {
                                    return (
                                        <>
                                            <div className='my-2' >
                                                <div key={index} className="card">
                                                    <div className="card-body">
                                                        <img src={item.VehicleImage} alt='img' />
                                                        <div className='TransName' >
                                                            <small className="card-title">{item.transName}</small>
                                                        </div>
                                                        <div className='verified' >
                                                             <small>{item.isVerified === true?
                                                             <>
                                                              <GoVerified/> "Verified"
                                                             </>
                                                              :
                                                              "Not Verified" }</small>
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
                                                        

                                                        <div className='buttons text-center d-flex justify-content-between my-2 ' >
                                                            <NavLink to={'/editdetails'} state={item} className=' btn-card' exact >Edit</NavLink>
                                                            <NavLink to={'/viewdetails'} state={item} className=' btn-card' exact>View</NavLink>
                                                        </div>
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
        </>
    )
}

export default AdminPage
