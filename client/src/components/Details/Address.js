import React, { useContext, useEffect, useState } from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import driverContext from '../useContext/driverContext';
import { useNavigate } from 'react-router-dom';

const Address = ({ data, setData, setCity, setAddress, setVehicle }) => {
    const navigate = useNavigate();
    const context = useContext(driverContext);
    const { Allcityhandle, allcities } = context;
    const [select, setSelect] = useState([]);

    function handlle(e) {
        setSelect(prev => [...prev, { city: e.target.value }]);
    }

    const setVal = (e) => {
        const { value, name } = e.target;

        setData(() => {
            return {
                ...data,
                [name]: value
            }
        })
    }

    const fun = (e) => {
        e.preventDefault()
        if (data.country === '' || data.address === '' || data.city === '' || data.state === "" || data.pincode === "") {
            toast("fill all details", {
                autoClose: 1000,
            })
            setAddress(true);
            setVehicle(false);
        } else {
            setAddress(false);
            setVehicle(true);
            setCity(select);
            toast("Your Data Saved successfully", {
                autoClose: 1000,
            })
        }
    }

    const handleRelocate = () => {
        navigate('/driver');
    }

    useEffect(() => {
        Allcityhandle();
    }, [])

    return (
        <>
            <div className='profileDriver selectedDriverCity '>
                <div>
                    <h6>Address Details </h6>
                    <small>Let us know about you to suggest the best for you.</small>
                    <form>
                        <div class="form-group">
                            <textarea type="address" name='address' value={data.address} class="form-control" id="adress" aria-describedby="emailHelp" placeholder="Address" onChange={setVal} />
                        </div>
                        <div class="form-group">
                            <input type="city" name='city' value={data.city} class="form-control" id="city" placeholder="City" onChange={setVal} />
                        </div>
                        <div class="form-group">
                            <input type="state" name='state' value={data.state} class="form-control" id="state" aria-describedby="emailHelp" placeholder="State" onChange={setVal} />
                        </div>

                        <div class="form-group">
                            <input type="pincode" name='pincode' value={data.pincode} class="form-control" id="pincode" aria-describedby="emailHelp" placeholder="Pin Code" onChange={setVal} />
                        </div>
                        <div class="form-group">
                            <input type="country" name='country' value={data.country} class="form-control" id="country" placeholder="Country" onChange={setVal} />
                        </div>

                        <div>
                            <button type="submit" onClick={handleRelocate} class="btn btn-profile mx-2 my-3">Cancel</button>
                            <button type="submit" class="btn btn-profile my-3 " onClick={fun} >Save</button>
                        </div>
                    </form>
                </div>

                <div className='selectedcity'> 
                    <h6>Select Your City</h6>
                    <select class="form-select" aria-label="Default select example"
                        name='cities'
                        onChange={(e) => { handlle(e) }}
                    >
                        <option selected >choose Your city</option>
                        {
                            allcities?.map((item, index) => {
                                return (
                                    <>
                                        <option key={index} >{item.city}</option>
                                    </>
                                )
                            })
                        }
                    </select>

                    <h6 style={{ paddingTop: "2rem" }}>Cities</h6>
                    {select?.map((item, i) => {
                        return (
                            <>
                                <span key={i} >{item.city}</span><br />
                            </>
                        )
                    })
                    }
                </div>
            </div>

            <ToastContainer />
        </>
    )
}

export default Address
