import React from 'react'

import '../style/driver.css'

import Navbar from './Navbar'
import Search from './Search'
import pic from '../images/Logo.png'

const DriverPage = () => {

    return (
        <>
            <Navbar />
            <div className='container my-2 '>
                <Search/>
                <div className="card w-25 ">
                    <div className="card-body">
                        <img className='w-75' src={pic} alt='img'/>
                        <h5 className="card-title">Card title</h5>  
                        <a href="#" className="card-link">Another</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DriverPage
