import React from 'react'
import '../style/navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='Navbar'>
                <div className='container'>
                    <div className='durgesh' >
                        <div className='navLeft'>
                            <span>LoadKro</span>
                        </div>

                        <div className='navRight' >
                            <a className='des' href='' >Home</a>
                            <a className='des' href='' >about</a>
                            <a className='des' href='' >login</a>
                            <span className='ManuIcon' ><i class="fa fa-bars"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
