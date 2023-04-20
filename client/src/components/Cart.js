import React, { useContext } from 'react'
import Navbar from './Navbar'
import '../style/cart.css'
import Footer from './Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import driverContext from './useContext/driverContext';

const Cart = () => {
    const context = useContext(driverContext);
    const { Address, setaddress, AddAddress } = context;
    const navigate = useNavigate();
    const location = useLocation();
    const dat = location.state;

    const handleSaved = () => {
        const { pickupAddress,
            Ppincode,
            Pcity,
            DropOffAddress,
            Dpincode,
            Dcity,
            name,
            Req,
            phone } = Address
        if (pickupAddress === '') {
            alert("plz fill address")
        } else if (DropOffAddress === '') {
            alert("plz fill DropOff Address")
        } else if (Pcity === '') {
            alert("plz fill City Name")
        } else if (Dcity === '') {
            alert("plz fill city")
        } else if (Ppincode === '') {
            alert("plz fill Pin Code")
        } else if (Dpincode === '') {
            alert("plz fill Pin Code")
        } else if (phone === '') {
            alert("plz fill city")
        } else if (Req === '') {
            alert("plz fill city")
        } else {
            AddAddress();
            alert("Your Data Saved Successfully")
            navigate('/vehicledetails', { state: { dat, Address } })
        }
    }
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='bookedD' >
                    <div className='headline text-center'>
                        <h2>We needs some details for Your bookings </h2>
                    </div>

                    <div className='container formfields '>
                        <form >
                            <div className='inputs'>
                                <div className="form-group p-3 ">
                                    <label>From</label>
                                    <input type="AIQRank" className="form-control" id="AIQRank" aria-describedby="emailHelp" placeholder="Pickup Address"
                                        name='pickupAddress'
                                        onChange={(e) => setaddress((prev) => ({ ...prev, pickupAddress: e.target.value }))}
                                    />
                                </div>

                                <div className="form-group p-3 ">
                                    <label>To</label>
                                    <input type="AIQRank" className="form-control" id="AIQRank" aria-describedby="emailHelp" placeholder="DropOff Address"
                                        name='DropOffAddress'
                                        onChange={(e) => setaddress((prev) => ({ ...prev, DropOffAddress: e.target.value }))}
                                    />
                                </div>

                                <div className="form-group p-3 ">
                                    <input type="AIQRank" className="form-control" id="AIQRank" aria-describedby="emailHelp" placeholder="City"
                                        name='Pcity'
                                        onChange={(e) => setaddress((prev) => ({ ...prev, Pcity: e.target.value }))}
                                    />
                                </div>

                                <div className="form-group p-3 ">
                                    <input type="AIQRank" className="form-control" id="AIQRank" aria-describedby="emailHelp" placeholder="City"
                                        name='Dcity'
                                        onChange={(e) => setaddress((prev) => ({ ...prev, Dcity: e.target.value }))}
                                    />
                                </div>

                                <div className="form-group p-3 ">
                                    <input type="AIQRank" className="form-control" id="AIQRank" aria-describedby="emailHelp" placeholder="Date"
                                        name='date'
                                        onChange={(e) => setaddress((prev) => ({ ...prev, date: e.target.value }))}
                                    />
                                </div>

                                <div className="form-group p-3 ">
                                    <input type="AIQRank" className="form-control" id="AIQRank" aria-describedby="emailHelp" placeholder="Pin code"
                                        name='Ppincode'
                                        onChange={(e) => setaddress((prev) => ({ ...prev, Ppincode: e.target.value }))}
                                    />
                                </div>

                                <div className="form-group p-3 ">
                                    <input type="AIQRank" className="form-control" id="AIQRank" aria-describedby="emailHelp" placeholder="Pin code"
                                        name='Dpincode'
                                        onChange={(e) => setaddress((prev) => ({ ...prev, Dpincode: e.target.value }))}
                                    />
                                </div>

                                <div className="form-group p-3 ">
                                    <input type="AIQRank" className="form-control" id="AIQRank" aria-describedby="emailHelp" placeholder="Name (Optional) "
                                        name='name'
                                        onChange={(e) => setaddress((prev) => ({ ...prev, name: e.target.value }))}
                                    />
                                </div>

                                <div className="form-group p-3 ">
                                    <input type="AIQRank" className="form-control" id="AIQRank" aria-describedby="emailHelp" placeholder="Phone Number" name='phone'
                                        onChange={(e) => setaddress((prev) => ({ ...prev, phone: e.target.value }))}
                                    />
                                </div>

                                <div className="form-group p-3 ">
                                    <select class="form-select" aria-label="Default select example"
                                        name='Req'
                                        onChange={(e) => setaddress((prev) => ({ ...prev, Req: e.target.value }))}
                                    >
                                        <option selected>Choose</option>
                                        <option value="1">Personal</option>
                                        <option value="2">business</option>
                                    </select>
                                </div>
                            </div>

                            <div className='formbutton text-center my-4'>
                                <a type="submit" onClick={handleSaved} className="btn-sub">Submit</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Cart
