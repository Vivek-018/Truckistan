import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const EditDetails = () => {
  const location = useLocation();
  const item = location.state;

  const useInputs = (initialValue) => {
    const [value, setValue] = useState(initialValue);
    const handleChange = (e) => {
      setValue(e.target.value);
    };

    const changeValue = (v) => {
      setValue(v);
    }
    return {
      value,
      onChange: handleChange,
      onSet: changeValue
    }
  }

  const name = useInputs('');
  const lname = useInputs('');
  const gender = useInputs('');
  const DOB = useInputs('');
  const email = useInputs('');
  const phone = useInputs('');
  // const  = useInputs('');
  const PanCardNumber = useInputs('');
  const address = useInputs('');
  const city = useInputs('');
  const state = useInputs('');
  const pincode = useInputs('');
  const country = useInputs('');
  const basefare = useInputs('')
  const bodysize = useInputs('')
  const lodingCapacity = useInputs('')
  const transName = useInputs('')
  const Vnamber = useInputs('');
  const RCnumber = useInputs('')
  const DLnumber = useInputs('')
  const PolutionCertificate = useInputs('')
  const driverImage = useInputs('')
  const VehicleImage = useInputs('')
  const DLImage = useInputs('')
  const RCImage = useInputs('')

  useEffect(() => {
    name.onSet(item.name)
    lname.onSet(item.lname)
    gender.onSet(item.gender)
    DOB.onSet(item.DOB)
    email.onSet(item.email)
    phone.onSet(item.onSet)
    PanCardNumber.onSet(item.PanCardNumber);
    address.onSet(item.address)
    city.onSet(item.city)
    state.onSet(item.state)
    pincode.onSet(item.pincode)
    country.onSet(item.country)
    basefare.onSet(item.basefare)
    bodysize.onSet(item.bodysize)
    lodingCapacity.onSet(item.lodingCapacity)
    transName.onSet(item.transName)
    Vnamber.onSet(item.Vnamber)
    DLnumber.onSet(item.DLnumber)
    RCnumber.onSet(item.RCnumber)
    PolutionCertificate.onSet(item.PolutionCertificate)
    driverImage.onSet(driverImage)
    VehicleImage.onSet(VehicleImage)
    DLImage.onSet(DLImage)
    RCImage.onSet(RCImage)
  }, [])

  const fun = (e) => {
    // e.preventDefault()
    // if (data.basefare === '' || data.lodingCapacity === '' || data.transName === '' || data.Vnamber === "" || data.RCnumber === "") {
    //   alert("fill all details")
    // } else {
    //   alert("Your Data Save successfully")
    // }
  }


  return (
    <>

      <Navbar />
      <div className='profileDriver' >
        <h6>Profile Details </h6>
        <small>Let us know about you to suggest the best for you.</small>

        <form>
          <div class="form-group">
            <input type="name" class="form-control" id="name" name='name' value={name.value} aria-describedby="emailHelp" placeholder="First Name" onChange={name.onChange} required />
          </div>
          <div class="form-group">
            <input type="lname" name='lname' value={lname.value} class="form-control" id="lname" placeholder="Last Name" onChange={lname.onChange} />
          </div>

          <div class="form-group ">
            <select id="inputState" name='gender' value={gender.value} class="form-control" onChange={gender.onChange} >
              <option selected>Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div class="form-group">
            <input type="DOB" name='DOB' value={DOB.value} class="form-control" id="email" aria-describedby="emailHelp" placeholder="Date of Brith" onChange={DOB.onChange} />
          </div>

          <div class="form-group">
            <input type="email" name='email' value={email.value} class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" onChange={email.onChange} />
          </div>
          <div class="form-group">
            <input type="phone" name='phone' value={phone.value} class="form-control" id="phone" placeholder="Phone Number" onChange={phone.onChange} />
          </div>

          <div class="form-group">
            {/* <input type="AdharNumber" name='AdharNumber' value={AdharNumber.value} class="form-control" id="AdharNumber" aria-describedby="emailHelp" placeholder="Adhar Card Number" onChange={setVal} /> */}
          </div>
          <div class="form-group">
            <input type="pcNumber" name='PanCardNumber' value={PanCardNumber.value} class="form-control" id="PanCardNumber" placeholder="Pan Card Number" onChange={PanCardNumber.onChange} />
          </div>

          <div>
            <button type="submit" class="btn btn-profile mx-2 my-3" >Cancel</button>
            <button type="submit" class="btn btn-profile my-3" onClick={fun}>Save</button>
          </div>
        </form>

      </div>


      <div className='profileDriver' >
        <h6>Address Details </h6>
        <small>Let us know about you to suggest the best for you.</small>

        <form>
          <div class="form-group">
            <textarea type="address" name='address' value={address.value} class="form-control" id="adress" aria-describedby="emailHelp" placeholder="Address" onChange={address.onChange} />
          </div>
          <div class="form-group">
            <input type="city" name='city' value={city.value} class="form-control" id="city" placeholder="City" onChange={city.onChange} />
          </div>


          <div class="form-group">
            <input type="state" name='state' value={state.value} class="form-control" id="state" aria-describedby="emailHelp" placeholder="State" onChange={state.onChange} />
          </div>

          <div class="form-group">
            <input type="pincode" name='pincode' value={pincode.value} class="form-control" id="pincode" aria-describedby="emailHelp" placeholder="Pin Code" onChange={pincode.onChange} />
          </div>
          <div class="form-group">
            <input type="country" name='country' value={country.value} class="form-control" id="country" placeholder="Country" onChange={country.onChange} />
          </div>

          <div>
            <button type="submit" class="btn btn-profile mx-2 my-3">Cancel</button>
            <button type="submit" class="btn btn-profile my-3 " onClick={fun} >Save</button>
          </div>
        </form>

      </div>


      <div className='profileDriver' >
        <h6>Vehicle Details </h6>
        <small>Let us know about you to suggest the best for you.</small>

        <form>
          <div class="form-group">
            <input type="basefare" name='basefare' value={basefare.value} class="form-control" id="basefare" aria-describedby="emailHelp" placeholder="Base Fare(Rent)" onChange={basefare.onChange} />
          </div>
          <div class="form-group">
            <input type="lodingCapacity" name='lodingCapacity' value={lodingCapacity.value} class="form-control" id="lodingCapacity" placeholder="Loding Capacity" onChange={lodingCapacity.onChange} />
          </div>

          <div class="form-group">
            <input type="bodysize" name='bodysize' value={bodysize.value} class="form-control" id="email" aria-describedby="emailHelp" placeholder="Load Body Size" onChange={bodysize.onChange} />
          </div>
          <div class="form-group">
            <input type="tarnsName" name='transName' value={transName.value} class="form-control" id="tarnsName" placeholder="Your Transportation Name" onChange={transName.onChange} />
          </div>

          <div class="form-group">
            <input type="vNumber" name='Vnamber' value={Vnamber.value} class="form-control" id="vNumber" aria-describedby="emailHelp" placeholder="Vehile Number" onChange={Vnamber.onChange} />
          </div>
          <div class="form-group">
            <input type="DLnumber" name='DLnumber' value={DLnumber.value} class="form-control" id="DLnumber" placeholder="Driving License Number" onChange={DLnumber.onChange} />
          </div>

          <div class="form-group">
            <input type="Rcnumber" name='RCnumber' value={RCnumber.value} class="form-control" id="Rcnumber" placeholder="RC Number" onChange={RCnumber.onChange} />
          </div>

          <div className='my-2' >
            <label class="form-check-label" for="flexRadioDefault1">You have Polution Certificate</label>
            <div class="form-check">
              <input class="form-check-input" name='Polutioncertificate' value={PolutionCertificate.value} type="radio" id="1" onChange={PolutionCertificate.onChange} />
              <label class="form-check-label" for="flexRadioDefault1">
                Yes
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name='Polutioncertificate' value={PolutionCertificate.value} id="2" checked onChange={PolutionCertificate.onChange} />
              <label class="form-check-label" for="flexRadioDefault2">
                No
              </label>
            </div>
          </div>

          <div>
            <button type="submit" class="btn btn-profile mx-2 my-3">Cancel</button>
            <button type="submit" class="btn btn-profile my-3" onClick={fun} >Save</button>
          </div>
        </form>

      </div>


      {/* <div className='doc' >
        <h6>Upload Documents </h6>
        <small>Let us know about you to suggest the best for you.</small>

        <div className='uploadtab' >

          <div className='w-75 my-4 '>
            <label class="form-label" for="customFile">Vehicle Driver Photo </label>
            <input class="form-control" type="file" id="formFile" name='driverImage' value={driverImage.value} onChange={driverImage.onChange} />
          </div>

          <div className='w-75 my-4 ' >
            <label class="form-label" for="customFile">Vehicle Image </label>
            <input class="form-control" type="file" id="formFile" name='VehicleImage' value={VehicleImage.value} onChange={VehicleImage.onChange} />
          </div>

          <div className='w-75 my-4'>
            <label class="form-label" for="customFile">Driving License</label>
            <input class="form-control" type="file" id="formFile" name='DLImage' value={DLImage.value} onChange={DLImage.onChange} />
          </div>

          <div className='w-75 my-4'>
            <label class="form-label" for="customFile">RC Document </label>
            <input class="form-control" type="file" id="formFile" name='RCImage' value={RCImage.value} onChange={RCImage.onChange} />
          </div>
        </div>

        <div>
          <button type="submit" class="btn btn-profile mx-2 my-3">Cancel</button>
          <button type="submit" class="btn btn-profile my-3" onClick={fun} >Save</button>
        </div>
      </div> */}
    </>
  )
}

export default EditDetails
