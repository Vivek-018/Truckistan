import React, { useEffect, useState } from 'react'
import '../style/navbar.css'
import navpic from '../images/user_web-1598433228.svg'
import { IoIosArrowDown } from 'react-icons/io';
import { BsCartFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { RiTruckLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [name, setname] = useState();
    const [Nav, setNav] = useState(false);
    const [dropdown, setdropdown] = useState(false);

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
                            <span className='des'> <AiFillHome /></span>
                            {
                                (name?.type === 'user') ? <Link className='des' to='/'> <span><BsCartFill /> </span></Link> : ( <Link className='des' to='/driverintro' state={0} > <span><RiTruckLine/> </span></Link>)
                            }
                            <a className='des  name' onClick={handledropdown} ><img src={navpic}></img> {name?.username? name?.username:"Not Available " }<span className='formDrop' ><IoIosArrowDown /></span></a>
                            <span className='ManuIcon' onClick={handleSideNav} ><i className="fa fa-bars"></i></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-options" id="profileOption">
                <ul>
                    <li>
                        <a to="/profiledetails">My Profile</a>
                    </li>
                    <li>
                        <a to="/setting">Account Settings</a>
                    </li>
                    <li>
                        <a to="/help">FAQ's & Help</a>
                    </li>
                    <li >
                        <a>Logout</a>
                    </li>
                </ul>
            </div>

            <div className='sidenav' id="mySidenav">
                <a className='des'><img src={navpic}></img> {name?.username}</a>
                <span className='des' href=''><AiFillHome /></span>
                {
                    (name?.type === 'user') ? <a className='des' href=''> <span><BsCartFill /> </span></a> : ("")
                }
            </div>
        </>
    )
}

export default Navbar
