import React from 'react'

const Address = () => {
    return (
        <>
            <div className='profileDriver' >
                <h6>Address Details </h6>
                <small>Let us know about you to suggest the best for you.</small>

                <form>
                    <div class="form-group">
                        <textarea type="address" class="form-control" id="adress" aria-describedby="emailHelp" placeholder="Address" />
                    </div>
                    <div class="form-group">
                        <input type="city" class="form-control" id="city" placeholder="City" />
                    </div>


                    <div class="form-group">
                        <input type="state" class="form-control" id="state" aria-describedby="emailHelp" placeholder="State" />
                    </div>

                    <div class="form-group">
                        <input type="pincode" class="form-control" id="pincode" aria-describedby="emailHelp" placeholder="Pin Code" />
                    </div>
                    <div class="form-group">
                        <input type="country" class="form-control" id="country" placeholder="Country" />
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

export default Address
