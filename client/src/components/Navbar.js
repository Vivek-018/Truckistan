import React, { useContext, useEffect, useState } from 'react'
import '../style/navbar.css'
import navpic from '../images/user_web-1598433228.svg'
import { IoIosArrowDown } from 'react-icons/io';
import { BsCartFill } from 'react-icons/bs';
import { AiOutlineHome } from 'react-icons/ai';
import { RiTruckLine } from 'react-icons/ri';
import { AiFillSetting } from 'react-icons/ai';
import { MdLocationCity } from 'react-icons/md';
import { BsFillBookmarkFill } from 'react-icons/bs';

import { GoVerified } from 'react-icons/go';
import { Link } from 'react-router-dom';
import driverContext from './useContext/driverContext';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import TextField from '@material-ui/core/TextField';

const Navbar = () => {
    const context = useContext(driverContext)
    const { editUserProfiledata } = context;
    const [name, setname] = useState();
    const [Nav, setNav] = useState(false);
    const [dropdown, setdropdown] = useState(false);
    const user = JSON.parse(localStorage.getItem("user"))
    const [link, setLink] = useState({ link: "" });
    const userType = localStorage.getItem("type")

    const useInput = (initialValue) => {
        const [value, setValues] = useState(initialValue)
        const handlChange = (event) => {
            setValues(event.target.value);
        }

        const changeValue = (v) => {
            setValues(v)
        }
        return {
            value,
            onChange: handlChange,
            onSet: changeValue
        };
    }

    const username = useInput("");
    const email = useInput('');
    const phone = useInput('')


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

    const handleEdits = () => {
        editUserProfiledata(user._id, username, email, phone, link)
        handleOpen();
        toast("Your Profile Updated Successfully", {
            autoClose: 1000,
        })
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
        if (res !== null) {
            setname(res.data);
            username.onSet(res.data?.username)
            email.onSet(res.data?.email)
            phone.onSet(res.data?.phone)
        }
    };

    useEffect(() => {
        handlelogin();
    }, [setname])

    return (
        <>
            {/* <EntryPage/> */}
            <div className='Navbar'>
                <div className='container'>
                    <div className='durgesh' >
                        <div className='navLeft'>
                            <span>Loadkro</span>
                        </div>

                        <div className='navRight'>
                            {
                                (userType === 'user') ? <Link to='/user' className='des home' > <AiOutlineHome /></Link> : (
                                    <>
                                        {
                                            userType === 'Driver' ? (
                                                <Link to='/driver' className='des home '> <AiOutlineHome /></Link>
                                            ) : (<Link to='/admin' className='des home '> <AiOutlineHome /></Link>)
                                        }
                                    </>
                                )
                            }

                            {
                                (userType === 'user') ?
                                    //  <Link className='des' to='/cart'> <span><BsCartFill /> </span></Link> 
                                    " "
                                    : (
                                        <>
                                            {
                                                userType === "Driver" ? (
                                                    <Link className='des' to='/driverintro' state={0} > <span><RiTruckLine /> </span></Link>
                                                ) : (
                                                    <>
                                                        <Link className='des' to='/verified' > <span><GoVerified /> </span></Link>
                                                        <Link className='des' to='/cities' > <span><MdLocationCity /> </span></Link>
                                                        <Link className='des' to='/book' > <span><BsFillBookmarkFill /> </span></Link>
                                                    </>
                                                )
                                            }
                                        </>
                                    )
                            }
                            <a className='des  name' onClick={handledropdown} ><img src={navpic}></img> {user.username ? user.username : "Not Available "}<span className='formDrop' ><IoIosArrowDown /></span></a>
                            <span className='ManuIcon' onClick={handleSideNav} ><i className="fa fa-bars"></i></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="profile-options" id="profileOption">
                <ul>
                    <li>
                        <a style={{ cursor: "pointer" }} to="/profiledetails" onClick={handleModal} >My Profile</a>
                    </li>

                    {
                        userType === "user" ?
                            <li >
                                <Link to="/book">Booked Vehicles</Link>
                            </li> : ""
                    }

                    <li>
                        <Link to="/help">FAQ's & Help</Link>
                    </li>
                    <li >
                        <Link to="/login" onClick={handleClear} >Logout</Link>
                    </li>
                </ul>
            </div>


            <div className='sidenav' id="mySidenav">
                <a className='des'><img src={navpic}></img> {name?.username}</a>
                <a className='desicon' href=''><AiOutlineHome /> Home</a>
                {
                    (name?.type === 'user') ? <a className='des' href=''> <span><BsCartFill /> </span></a> : ("")
                }
            </div>

            {/* ==================== my profile modal ============================= */}

            <div div id="myModal" class="modal" >
                <div class="modal-content my-4 ">
                    <div className='proDetails text-center '>
                        <span>Account Settings <AiFillSetting /> </span>
                    </div>

                    <div className='uploadImg' >
                        <div class="w-50 text-center ">
                            <label for="formFile" class="form-label">Upload Image</label>
                            <input class="form-control" value={link.link} name='link' type="file" id="formFile"
                                onChange={(event) => {
                                    setLink((prev) => ({ ...prev, link: event.target.value }));
                                }}
                            />
                        </div>


                        <div>
                            <div className='infoProfile' >
                                {
                                    name?.type === 'user' || name?.type === "admin" ? "" : (
                                        <div className='num' >
                                            <h6>Total Vehicles</h6>
                                            <span> 8 </span>
                                        </div>
                                    )
                                }
                                <div className='' >
                                    <TextField
                                        id="standard-password-input"
                                        label="Name"
                                        type="name"
                                        autoComplete="current-password"
                                        variant="standard"
                                        value={username.value}
                                        onChange={username.onChange}
                                    />
                                </div>

                                <div className='my-2' >
                                    <TextField
                                        id="standard-password-input"
                                        label="Phone"
                                        type="phone"
                                        autoComplete="current-password"
                                        variant="standard"
                                        value={phone.value}
                                        onChange={phone.onChange}
                                    />
                                </div>

                                <div className='my-2'>
                                    <TextField
                                        id="standard-password-input"
                                        label="Email"
                                        type="email"
                                        autoComplete="current-password"
                                        variant="standard"
                                        value={email.value}
                                        onChange={email.onChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center my-4' >
                        <button onClick={handleOpen} className=' myprofile-btn ' >close</button>
                        <button className=' myprofile-btn mx-4' onClick={handleEdits} >Save</button>
                    </div>
                </div>
            </div >
            <ToastContainer />


        </>
    )
}

export default Navbar
