import React from 'react'

const Vehicle = () => {
    return (
        <>
            <div className='profileDriver' >
                <h6>Vehicle Details </h6>
                <small>Let us know about you to suggest the best for you.</small>

                <form>
                    <div class="form-group">
                        <input type="name" class="form-control" id="name" aria-describedby="emailHelp" placeholder="First Name" />
                    </div>
                    <div class="form-group">
                        <input type="lname" class="form-control" id="lname" placeholder="Last Name" />
                    </div>

                    <div class="form-group ">
                        <select id="inputState" class="form-control">
                            <option selected>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <input type="phone" class="form-control" id="phone" placeholder="Phone Number" />
                    </div>

                    <div class="form-group">
                        <input type="AdharNumber" class="form-control" id="AdharNumber" aria-describedby="emailHelp" placeholder="Adhar Card Number" />
                    </div>
                    <div class="form-group">
                        <input type="pcNumber" class="form-control" id="pcNumber" placeholder="Pan Card Number" />
                    </div>

                    <div>
                        <button type="submit" class="btn btn-profile mx-2 my-3">Cancel</button>
                        <button type="submit" class="btn btn-profile my-3 ">Save</button>
                    </div>
                </form>

            </div>
        </>
    )
}

export default Vehicle
