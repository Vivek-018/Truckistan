import React, { useEffect, useState} from 'react'
import Navbar from './Navbar'
import Search from './Search'
import { FaRegThumbsUp } from 'react-icons/fa';
import { useContext } from 'react';
import driverContext from './useContext/driverContext';
import OwnerName from './SubVerified/OwnerName';
import { NavLink } from 'react-router-dom';

const Verified = () => {
    const context = useContext(driverContext)
    const { ChangeIsVerified, alldata, getallData } = context;
    const [check, setChecked] = useState(false);
    const [isVerified, setIsVerified] = useState(true);
    const [VerifyId, setVerify] = useState();

    function handleOpenModal(num, id) {
        document.getElementById("Modal").style.display = "block";
        if (num === 1) {
            setChecked(false)
            setVerify(id)
        } else {
            setChecked(true)
        }
    }

    function CloseModal() {
        document.getElementById("Modal").style.display = "none";
    }

    const handleVerified = () => {
        ChangeIsVerified(isVerified, VerifyId)
        document.getElementById("Modal").style.display = "none";
        window.location.reload()
    }

    const handleDelete = () => {
        document.getElementById("Modal").style.display = "none";
    }

    useEffect(() => {
        getallData()
    }, [])

    return (
        <>
            <Navbar />
            <div className='container'>
                <Search />
                <div className='tableVerified'>
                    <table>
                        <tr className='my-4' >
                            <td>S.No</td>
                            <td>Owner Name</td>
                            <td>Driver Name</td>
                            <td>Vehicle Number</td>
                        </tr>
                        {
                            alldata.length === 0 | alldata === undefined ?
                                <div class="loader my-4 "></div> :
                                alldata.map((item, index) => {
                                    return (
                                        <tr key={index} className='trtd' >
                                            <td>{index + 1}</td>
                                            <td><OwnerName OwnerName={item} /></td>
                                            <td>{item.name}</td>
                                            <td>{item.Vnamber}</td>
                                            <td><NavLink to={'/viewdetails'} state={item} className='btn-view'>View</NavLink></td>
                                            <td>
                                                <button className='btn-view' onClick={() => { handleOpenModal(1, item._id) }}>
                                                    {item.isVerified === true ? "Verifeid" : "Verify"}
                                                </button>
                                            </td>
                                            <td><button className='btn-delete' onClick={() => { handleOpenModal(2) }} >Delete</button></td>
                                        </tr>
                                    )
                                })
                        }
                    </table>
                </div>
            </div>

            {/*======================== modal ======================== */}

            <div id="Modal" className="modal">
                <div className="modal-content">
                    <span><FaRegThumbsUp /></span>
                    {
                        !check ?
                            <h2>Your Are sure to verify It !</h2> :
                            <h2>Your Are sure to Delete It !</h2>
                    }
                    <div className='btn-modalm my-4'>
                        <button className='btn-view mx-4 ' onClick={CloseModal} >Close</button>
                        {
                            !check ?
                                <button className='btn-view mx-4 ' onClick={handleVerified} >Submit</button> :
                                <button className='btn-view mx-4 ' onClick={handleDelete} >Submit</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Verified
