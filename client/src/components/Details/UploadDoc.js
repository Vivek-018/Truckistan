import React from 'react'

const UploadDoc = ({ data, setData, SaveData }) => {

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
        if (data.driverImage === '' || data.VehicleImage === '' || data.DLImage === '' || data.RCImage === "") {
            alert("fill all details")
        } else {
            SaveData();
            alert("Your Data Save successfully")
        }
    }

    return (
        <>

            <div className='doc' >
                <h6>Upload Documents </h6>
                <small>Let us know about you to suggest the best for you.</small>

                <div className='uploadtab' >

                    <div className='w-75 my-4 '>
                        <label class="form-label" for="customFile">Vehicle Driver Photo </label>
                        <input class="form-control" type="file" id="formFile"  name='driverImage' value={data.driverImage} onChange={setVal} />
                    </div>

                    <div className='w-75 my-4 ' >
                        <label class="form-label" for="customFile">Vehicle Image </label>
                        <input class="form-control" type="file" id="formFile"  name='VehicleImage' value={data.VehicleImage} onChange={setVal} />
                    </div>

                    <div className='w-75 my-4'>
                        <label class="form-label" for="customFile">Driving License</label>
                        <input class="form-control" type="file" id="formFile"  name='DLImage' value={data.DLImage} onChange={setVal} />
                    </div>

                    <div className='w-75 my-4'>
                        <label class="form-label" for="customFile">RC Document </label>
                        <input class="form-control" type="file" id="formFile"  name='RCImage' value={data.RCImage} onChange={setVal} />
                    </div>
                </div>

                <div>
                    <button type="submit" class="btn btn-profile mx-2 my-3">Cancel</button>
                    <button type="submit" class="btn btn-profile my-3" onClick={fun} >Save</button>
                </div>
            </div>
        </>
    )
}

export default UploadDoc
