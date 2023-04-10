import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Address = ({ data, setData, setAddress, setVehicle }) => {

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
            // alert("fill all details")
            toast("fill all details", {
                autoClose: 1000,
            })
            setAddress(true);
            setVehicle(false);
        } else {
            setAddress(false);
            setVehicle(true);
            // alert("Your Data Save successfully")
            toast("Your Data Saved successfully", {
                autoClose: 1000,
            })
        }
    }

    return (
        <>
            <div className='profileDriver' >
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
                        <button type="submit" class="btn btn-profile mx-2 my-3">Cancel</button>
                        <button type="submit" class="btn btn-profile my-3 " onClick={fun} >Save</button>
                    </div>
                </form>

            </div>
        <ToastContainer />
        </>
    )
}

export default Address
