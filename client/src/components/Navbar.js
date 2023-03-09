import React, { useEffect, useState } from 'react'
import '../style/navbar.css'
import navpic from '../images/user_web-1598433228.svg'
import { IoIosArrowDown } from 'react-icons/io';
import { BsCartFill } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { RiTruckLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const [name, setname] = useState();
    const [Nav, setNav] = useState(false);
    const [dropdown, setdropdown] = useState(false);
    const navigate = useNavigate()

// ======================= fetching data according users ==================

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

    const handleSideNav = () => {
        if (Nav === false) {
            document.getElementById("mySidenav").style.width = "250px";
            setNav(true);
        } else {
            document.getElementById("mySidenav").style.width = "0";
            setNav(false);
        }
    }

    function handledropdown() {
        if (dropdown === false) {
            document.getElementById("profileOption").style.height = "fit-content";
            setdropdown(true);
        } else {
            document.getElementById("profileOption").style.height = "0px";
            setdropdown(false);
        }
    }


    var modal = document.getElementById("myModal");
    function handleModal() {
        modal.style.display = "block";
    }

    function handleOpen() {
        modal.style.display = "none";
    }

    const handleClear = () => {
        localStorage.clear();
    }

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
                            {
                                (name?.type === 'user') ? <Link to='' className='des home '> <AiOutlineHome /></Link> : (<Link to='/driver' className='des home '> <AiOutlineHome /></Link>)
                            }
                            {
                                (name?.type === 'user') ? <Link className='des' to=''> <span><BsCartFill /> </span></Link> : (<Link className='des' to='/driverintro' state={0} > <span><RiTruckLine /> </span></Link>)
                            }
                            <a className='des  name' onClick={handledropdown} ><img src={navpic}></img> {name?.username ? name?.username : "Not Available "}<span className='formDrop' ><IoIosArrowDown /></span></a>
                            <span className='ManuIcon' onClick={handleSideNav} ><i className="fa fa-bars"></i></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-options" id="profileOption">
                <ul>
                    <li>
                        <a style={{cursor:"pointer"}} to="/profiledetails" onClick={handleModal} >My Profile</a>
                    </li>
                    <li>
                        <a to="/help">FAQ's & Help</a>
                    </li>
                    <li >
                        <Link to="/login" onClick={handleClear} >Logout</Link>
                    </li>
                </ul>
            </div>

            <div className='sidenav' id="mySidenav">
                <a className='des'><img src={navpic}></img> {name?.username}</a>
                <span className='des' href=''><AiOutlineHome /></span>
                {
                    (name?.type === 'user') ? <a className='des' href=''> <span><BsCartFill /> </span></a> : ("")
                }
            </div>

            {/* ==================== my profile modal ============================= */}

            <div id="myModal" class="modal">
                <div class="modal-content">
                    <div className='text-center proDetails '>
                        <span>Profile Deatils  </span>
                    </div>

                    <div className='infoProfile' >
                        <div className='num mx-4 ' >
                            <h6>Total Vehicles</h6>
                            <span> 8 </span>
                        </div>

                        <div className='mx-4' >
                            <h6>Name </h6>
                            <span>{name?.username? name?.username :"Not Available"}</span>
                        </div>

                        <div className='my-4 mx-4 ' >
                            <h6>Phone Number </h6>
                            <span>{name?.phone?name?.phone:"+91 xxxxxxxxxx" }</span>
                        </div>

                        <div className='my-4 mx-4'>
                            <h6>Email</h6>
                            <span>{name?.email?name?.email:"Not Availble"}</span>
                        </div>
                    </div>

                    <div className='text-center my-2' >
                        <button onClick={handleOpen} className=' myprofile-btn ' >close</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
