import React from 'react'

const Profile = ({ data, setData, setAddress, setProfile }) => {
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
        if (data.name === '' || data.lname === '' || data.phone === '' || data.email === "" || data.DOB === "" || data.AdharNumber === "" || data.PanCardNumber === "" || data.gender === "") {
            alert("fill all details")
            setAddress(false);
            setProfile(true);
        } else {
            setAddress(true);
            setProfile(false);
            alert("Your Data Save successfully")
        }
    }

    return (
        <>
            <div className='profileDriver' >
                <h6>Profile Details </h6>
                <small>Let us know about you to suggest the best for you.</small>

                <form>
                    <div class="form-group">
                        <input type="name" class="form-control" id="name" name='name' value={data.name} aria-describedby="emailHelp" placeholder="First Name" onChange={setVal} required />
                    </div>
                    <div class="form-group">
                        <input type="lname" name='lname' value={data.lname} class="form-control" id="lname" placeholder="Last Name" onChange={setVal} />
                    </div>

                    <div class="form-group ">
                        <select id="inputState" name='gender' value={data.gender} class="form-control" onChange={setVal} >
                            <option selected>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <input type="DOB" name='DOB' value={data.DOB} class="form-control" id="email" aria-describedby="emailHelp" placeholder="Date of Brith" onChange={setVal} />
                    </div>

                    <div class="form-group">
                        <input type="email" name='email' value={data.email} class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" onChange={setVal} />
                    </div>
                    <div class="form-group">
                        <input type="phone" name='phone' value={data.phone} class="form-control" id="phone" placeholder="Phone Number" onChange={setVal} />
                    </div>

                    <div class="form-group">
                        <input type="AdharNumber" name='AdharNumber' value={data.AdharNumber} class="form-control" id="AdharNumber" aria-describedby="emailHelp" placeholder="Adhar Card Number" onChange={setVal} />
                    </div>
                    <div class="form-group">
                        <input type="pcNumber" name='PanCardNumber' value={data.PanCardNumber} class="form-control" id="PanCardNumber" placeholder="Pan Card Number" onChange={setVal} />
                    </div>

                    <div>
                        <button type="submit" class="btn btn-profile mx-2 my-3" >Cancel</button>
                        <button type="submit" class="btn btn-profile my-3" onClick={fun}>Save</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Profile
