import React, { useState } from 'react'
import driverContext from './driverContext'
import axios from 'axios'

const DriversData = (props) => {

  const host = "http://localhost:5000/driver"
  const Userhost = "http://localhost:5000/user"
  const adminhost = "http://localhost:5000/admin"
  const citieshost = "http://localhost:5000/city"
  const commenthost = "http://localhost:5000/comment"
  const [data, setData] = useState([]);
  const [alldata, setAllData] = useState([]);
  const [UpcomingOtp, setOtp] = useState();
  const [UserName, setUserName] = useState([])
  const [GetAllCity, setgetAllcity] = useState();
  const [moTrucks, setmoTrucks] = useState();
  const [ontruks, setOntrucks] = useState();
  const [OneData, setOneData] = useState();
  const [Address, setaddress] = useState({
    pickupAddress: "",
    Ppincode: "",
    Pcity: "",
    DropOffAddress: "",
    Dpincode: "",
    Dcity: "",
    driverId: "",
    name: "",
    Req: "",
    phone: ""
  });
  const VehicleId = OneData?._id;
  const driverId = OneData?.driverId;

  const [booked, setBooked] = useState();
  const [allcities, setCities] = useState();

  const getData = async () => {
    const response = await fetch(`${host}/vehiclesData`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "token": localStorage.getItem("token")
      },
    });
    const json = await response.json();
    setData(json.data);
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

  const editData = async (id, name, lname, gender, DOB, email,
    phone, PanCardNumber, address, city, state, pincode, Vnamber,
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
      body: JSON.stringify({ email })
    })
    const json = await response.json();
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
      body: JSON.stringify({ email })
    })
    const json = await response.json();
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

  const ChangeIsVerified = async (isVerified, id) => {
    try {
      const data = await axios.put(`${adminhost}/changeisVerified/${id}`, { isVerified })
      return Promise.resolve(data.data)
    } catch (error) {
      return Promise.reject({ error })
    }
  }

  const UsersDataBYId = async (id) => {
    try {
      const res = await axios.get(`${adminhost}/UserDataAtAdmin/${id}`)
      setUserName(res.data);
      return Promise.resolve(res);
    } catch (error) {
      return Promise.reject({ error })
    }
  }

  const Addcities = async (city) => {
    try {
      const cities = await axios.post(`${citieshost}/cities`, { city })
      return Promise.resolve(cities);
    } catch (error) {
      return Promise.reject({ error })
    }
  }

  const Deletecities = async (id) => {
    try {
      const cities = await axios.delete(`${citieshost}/OnebyOnecities/${id}`)
      return Promise.resolve(cities);
    } catch (error) {
      return Promise.reject({ error })
    }
  }

  const GetAllCities = async () => {
    try {
      const allcities = await axios.get(`${citieshost}/allcities`)
      setgetAllcity(allcities.data)
      return Promise.resolve(allcities);
    } catch (error) {
      return Promise.reject({ error })
    }
  }

  const DeleteDrivers = async (id) => {
    try {
      const drivers = await axios.delete(`${adminhost}/driversAndTrucks/${id}`)
      return Promise.resolve(drivers);
    } catch (error) {
      return Promise.reject({ error })
    }
  }

  const getMOVERSTRUCKS = async () => {
    const response = await fetch(`${host}/VehData`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const json = await response.json();
    setmoTrucks(json);
  }

  const gettruksTrans = async () => {
    const response = await fetch(`${host}/VehNext`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const json = await response.json();
    setOntrucks(json);
  }

  const AddAddress = async () => {
    try {
      const addressData = await axios.post(`${Userhost}/BookedAddress`, { Address, VehicleId, driverId },
        {
          headers: {
            "token": localStorage.getItem("token")
          },
        }
      )
      return Promise.resolve(addressData);
    } catch (error) {
      return Promise.reject({ error })
    }
  }

  const getbookedVehicles = async () => {
    const response = await fetch(`${Userhost}/bookedVehicles`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "token": localStorage.getItem("token")
      },
    })
    const json = await response.json();
    setBooked(json);
  }


  const getbookedAdminSide = async () => {
    const response = await fetch(`${adminhost}/bookedVehiclesAdmin`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    const json = await response.json();
    setBooked(json);
  }

  const SavedComment = async (comment) => {
    const res = await fetch(`${commenthost}/SavedComments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "token": localStorage.getItem("token")
      },
      body: JSON.stringify({ comment })
    })
    const data = await res.json();
  }

  const ChangeBooked = async (Booked, id) => {
    const res = await fetch(`${Userhost}/ChangeVehicleStatus/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ Booked })
    })
    const data = await res.json();
  }

  const Allcityhandle = async () => {
    const res = await fetch(`${citieshost}/allcities`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json();
    setCities(data)
  }

  const handleSearchVehicle = async (query) => {
    const data = await fetch(`${host}/searchVehicle?city=${query.cityName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    setAllData(res)
  };

  const handleVehicleDriver = async (query) => {
    const data = await fetch(`${host}/searchVehDriver?name=${query.driverName}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await data.json();
    setData(res)
  };

  const getbookedDriverSide = async () => {
    const response = await fetch(`${host}/bookedVehiclesDriver`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "token": localStorage.getItem("token")
      },
    })
    const json = await response.json();
    setBooked(json);
  }

  const [getveh_id , setGetVeh] = useState();
  const GetVehicleBy_id = async (id) => {
    try {
      const veh = await axios.get(`${host}/Vehicleby_id/${id}`)
      setGetVeh(veh.data);
      return Promise.resolve(veh);
    } catch (error) {
      return Promise.reject({ error })
    }
  }

  return (
    <driverContext.Provider value={{
      UpcomingOtp, data, generateOTPAtSignup, Deletecities, getMOVERSTRUCKS,
      alldata, getData, getallData, editData, GetAllCities, DeleteDrivers,
      SavedComment, generateOTP, resetPassword, ChangeIsVerified, GetAllCity,
      gettruksTrans, handleVehicleDriver, getbookedDriverSide,GetVehicleBy_id,
      ChangeBooked, Allcityhandle, allcities, handleSearchVehicle, getbookedAdminSide,
      editUserProfiledata, UsersDataBYId, UserName, Addcities, moTrucks, ontruks,
      setOneData, Address, setaddress, OneData, AddAddress, getbookedVehicles, booked
      , getveh_id
    }} >
      {props.children}
    </driverContext.Provider>
  )
}

export default DriversData;
