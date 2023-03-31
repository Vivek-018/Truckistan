import React from 'react'
import Navbar from './Navbar'
import Search from './Search'

const Verified = () => {

    function handleOpenModal() {
        document.getElementById("Modal").style.display = "block";
    }

    function CloseModal() {
        document.getElementById("Modal").style.display = "none";
    }

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
                        <tr className='trtd' >
                            <td>1</td>
                            <td>Durgesh Chaudhary</td>
                            <td>Durgesh Driver</td>
                            <td>UP 36 89255</td>
                            <td><button className='btn-view'>View</button></td>
                            <td><button className='btn-view' onClick={handleOpenModal} >Verify</button></td>
                            <td><button className='btn-delete' onClick={handleOpenModal} >Delete</button></td>
                        </tr>

                        <tr className='trtd' >
                            <td>1</td>
                            <td>Durgesh Chaudhary</td>
                            <td>Durgesh Driver</td>
                            <td>UP 36 89255</td>
                            <td><button className='btn-view'>View</button></td>
                            <td><button className='btn-view' onClick={handleOpenModal} >Verify</button></td>
                            <td><button className='btn-delete' onClick={handleOpenModal} >Delete</button></td>
                        </tr>

                        <tr className='trtd'>
                            <td>1</td>
                            <td>Durgesh Chaudhary</td>
                            <td>Durgesh Driver</td>
                            <td>UP 36 89255</td>
                            <td><button className='btn-view'>View</button></td>
                            <td><button className='btn-view' onClick={handleOpenModal} >Verify</button></td>
                            <td><button className='btn-delete' onClick={handleOpenModal} >Delete</button></td>
                        </tr>

                        <tr className='trtd' >
                            <td>1</td>
                            <td>Durgesh Chaudhary</td>
                            <td>Durgesh Driver</td>
                            <td>UP 36 89255</td>
                            <td><button className='btn-view'>View</button></td>
                            <td><button className='btn-view' onClick={handleOpenModal} >Verify</button></td>
                            <td><button className='btn-delete' onClick={handleOpenModal} >Delete</button></td>
                        </tr>
                    </table>
                </div>
            </div>

            {/*======================== modal ======================== */}

            <div id="Modal" className="modal">
                <div className="modal-content">
                    <h4>Your Are saoure to varify It !</h4>
                    <div className='btn-modal' >
                        <button className='btn-view' onClick={CloseModal} >Close</button>
                        <button className='btn-view'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Verified
