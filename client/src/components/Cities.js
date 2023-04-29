import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../style/cities.css'
import '../style/admin.css'
import Search from './Search'
import driverContext from './useContext/driverContext'
import Footer from './Footer'

const Cities = () => {

  const context = useContext(driverContext);
  const { Addcities, Deletecities, GetAllCities,
    GetAllCity, SearchByCity } = context;
  const [cityName, setcityName] = useState();
  const [city, setCity] = useState();

  const handleInputs = () => {
    document.getElementById("Modal").style.display = "block";
  }

  const CloseModal = () => {
    document.getElementById("Modal").style.display = "none";
  }

  const handleSearch = () => {
    SearchByCity(cityName);
  }

  const handleSubmit = () => {
    Addcities(city);
    document.getElementById("Modal").style.display = "none";
    window.location.reload();
  }

  const handleDeleted = (id) => {
    Deletecities(id)
    window.location.reload();
  }

  useEffect(() => {
    GetAllCities();
  }, [])

  return (
    <>
      <Navbar />
      <div className='container'>
        <Search placeholder={"by City"} setcityName={setcityName} handleSearch={handleSearch} />
        <div className='cities-table'>

          <div className='add-cities' >
            <button onClick={handleInputs} className='btn-cities' >Add New Cities</button>
          </div>

          <table>
            <tr>
              <td >S.No</td>
              <td>cities name</td>
            </tr>

            {
              GetAllCity?.length === 0 || GetAllCity === undefined ?
                <div class="loader my-4 "></div> :
                GetAllCity?.map((item, index) => {
                  return (
                    <>
                      <tr key={index} >
                        <td>{index + 1}</td>
                        <td >{item.city}</td>
                        <td ><button className='btn-view'>Edit</button></td>
                        <td ><button className='btn-view' onClick={() => handleDeleted(item._id)}>Delete</button></td>
                      </tr>
                    </>
                  )
                })
            }
          </table>
        </div>
      </div>

      {/* = ============================== */}
      <div id="Modal" class="modal">
        <div class="modal-content">
          <div className='modalinput'>
            <input type='text' placeholder='Enter City'
              onChange={(e) => { setCity((prev) => ({ ...prev, city: e.target.value })) }}
            />
          </div>
          <div className='btn-modalm my-4'>
            <button className='btn-view mx-4 ' onClick={CloseModal} >Close</button>
            <button className='btn-view mx-4 ' onClick={handleSubmit} >Submit</button> :
          </div>
        </div>
      </div>

      <div className='showMore' >
        <button className='btn-more'>More</button>
      </div>

      <Footer />

    </>
  )
}

export default Cities
