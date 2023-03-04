import React, { useEffect, useState } from 'react'
import '../style/navbar.css'
import navpic from '../images/user_web-1598433228.svg'
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {

    const [name, setname] = useState();

    const handlelogin = async (e) => {
        const data = await fetch(`http://localhost:5000/user/getUserData`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "token": localStorage.getItem('token')
            }
        });
        const res = await data.json();
        setname(res);
    };

    useEffect(() => {
        handlelogin();
    }, [])

    return (
        <>
            <div className='Navbar'>
                <div className='container'>
                    <div className='durgesh' >
                        <div className='navLeft'>
                            <span>Transt</span>
                        </div>
                        <div className='navRight'>
                            <a className='des' href='' >Home</a>
                            <a className='des' href='' >about</a>
                            <a className='des' href='' >login</a>
                            <a className='des' ><img src={navpic}></img> {name?.username} <span><IoIosArrowDown/></span>
                             </a>
                            <span className='ManuIcon' ><i className="fa fa-bars"></i></span>
                        </div>
                    </div>
                </div>
            </div>
       
       

            
        </>
    )
}

export default Navbar
