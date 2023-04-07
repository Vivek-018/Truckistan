import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { NavLink } from 'react-router-dom'

const BookedVehicles = () => {
    return (
        <>
            <Navbar/>

            <div className='container'>
                <div style={{paddingTop:"4rem", paddingBottom:"4rem"}} className='tableVerified'>
                    <h3 className='my-4' >Your Booking Status</h3>
                    <table>
                        <tr className='my-4' >
                            <td>S.No</td>
                            <td>Driver Name</td>
                            <td>Vehicle Number</td>
                        </tr>
                        <tr className='trtd' >
                            <td>index </td>
                            <td>item.name</td>
                            <td>item.Vnamber</td>
                            <td><NavLink to={'/viewdetails'} className='btn-view'>View</NavLink></td>
                            <td><button className='btn-view' >abg</button> </td>
                            <td><button className='btn-delete'>Delete</button></td>
                        </tr>
                        <tr className='trtd' >
                            <td>index </td>
                            <td>item.name</td>
                            <td>item.Vnamber</td>
                            <td><NavLink to={'/viewdetails'} className='btn-view'>View</NavLink></td>
                            <td><button className='btn-view' >abg</button> </td>
                            <td><button className='btn-delete'>Delete</button></td>
                        </tr>
                        <tr className='trtd' >
                            <td>index </td>
                            <td>item.name</td>
                            <td>item.Vnamber</td>
                            <td><NavLink to={'/viewdetails'} className='btn-view'>View</NavLink></td>
                            <td><button className='btn-view' >abg</button> </td>
                            <td><button className='btn-delete'>Delete</button></td>
                        </tr>
                        <tr className='trtd' >
                            <td>index </td>
                            <td>item.name</td>
                            <td>item.Vnamber</td>
                            <td><NavLink to={'/viewdetails'} className='btn-view'>View</NavLink></td>
                            <td><button className='btn-view' >abg</button> </td>
                            <td><button className='btn-delete'>Delete</button></td>
                        </tr>
                        <tr className='trtd' >
                            <td>index </td>
                            <td>item.name</td>
                            <td>item.Vnamber</td>
                            <td><NavLink to={'/viewdetails'} className='btn-view'>View</NavLink></td>
                            <td><button className='btn-view' >abg</button> </td>
                            <td><button className='btn-delete'>Delete</button></td>
                        </tr>
                    </table>
                </div>
            </div>

            <Footer/>
        </>
    )
}

export default BookedVehicles
