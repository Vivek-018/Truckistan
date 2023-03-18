import React, { useState } from 'react'
import driverContext from './driverContext'
import axios from 'axios'

const DriversData = (props) => {

  const host = "http://localhost:5000/driver"
  const Userhost = "http://localhost:5000/user"
  const [data, setData] = useState([]);
  const [alldata, setAllData] = useState([]);
  const [UpcomingOtp, setOtp] = useState();

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
  }


  const editUserProfiledata = async (id, username, email, phone, link) => {
    const response = await fetch(`${Userhost}/editUserProfiledata/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username, email, phone, link
      })
    })
    const json = await response.json();
  }

  const generateOTPAtSignup = async (email) => {
    const response = await fetch(`${Userhost}/generateOTPAtSignup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email})
    })
    const json = await response.json();
    console.log(json, "res")
    setOtp(json)
    if (json.code) {
      let text = ` Your Password OTP is ${json.code} . Verify and recover your password.`;
      await axios.post(`${Userhost}/sendMail`, { email, text, subject: "Password Reset" })
      return Promise.resolve(json.code);
    } else {
      return Promise.reject("error")
    }
  }

  const generateOTP = async (email) => {
    const response = await fetch(`${Userhost}/generateOTP`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({email})
    })
    const json = await response.json();
    console.log(json, "res")
    setOtp(json)
    if (json.code) {
      let text = ` Your Password OTP is ${json.code} . Verify and recover your password.`;
      await axios.post(`${Userhost}/sendMail`, { email, text, subject: "Password Reset" })
      return Promise.resolve(json.code);
    } else {
      return Promise.reject("error")
    }
  }

  const resetPassword = async (email, password) => {
    try {
      const { data, status } = await axios.put(`${Userhost}/resetPasword`, { email, password })
      return Promise.resolve({ data, status })
    } catch (error) {
      return Promise.reject({ error })
    }
  }
  
  return (
    <driverContext.Provider value={{ UpcomingOtp, data,generateOTPAtSignup ,alldata, getData, getallData, editData, generateOTP, resetPassword, editUserProfiledata }} >
      {props.children}
    </driverContext.Provider>
  )
}

export default DriversData;
