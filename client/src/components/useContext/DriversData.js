import React, { useState } from 'react'
import driverContext from './driverContext'

const DriversData = (props) => {

  const host = "http://localhost:5000/driver"
  const [data, setData] = useState([]);
  const [alldata, setAllData] = useState([]);

  const getData = async () => {
    const response = await fetch(`${host}/vehiclesData`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "token": localStorage.getItem("token")
      },
    });
    const json = await response.json();
    setData(json);
  }

  const getallData = async () => {
    const response = await fetch(`${host}/allvehiclesData`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const json = await response.json();
    setAllData(json.data);
  }

  const editData = async (id, name, lname, gender, DOB, email, phone,
    PanCardNumber, address, city, state, pincode, Vnamber,
    country, basefare, bodysize, lodingCapacity, transName,
    RCnumber, DLnumber, PolutionCertificate, driverImage,
    VehicleImage, DLImage, RCImage) => {
    const response = await fetch(`${host}/editedData/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, lname, gender, DOB, email, phone,
        PanCardNumber, address, city, state, pincode, Vnamber,
        country, basefare, bodysize, lodingCapacity, transName,
        RCnumber, DLnumber, PolutionCertificate, driverImage,
        VehicleImage, DLImage, RCImage
      })
    })
    const json = await response.json();
    console.log(json)
  }

  return (
    <driverContext.Provider value={{ data, alldata, getData, getallData, editData }} >
      {props.children}
    </driverContext.Provider>
  )
}

export default DriversData;
