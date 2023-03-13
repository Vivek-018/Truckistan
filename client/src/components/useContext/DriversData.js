import React, { useState } from 'react'
import driverContext from './driverContext'

const DriversData = (props) => {
  
    const host = "http://localhost:5000/driver"
    const dataInitial = [];
    const [data, setData] = useState(dataInitial);

    const getData = async ()=>{
        const response = await fetch(`${host}/vehiclesData`, {
             method:"GET",
             headers:{
                "Content-Type":"application/json",
                "token":localStorage.getItem("token")
             },
        }) ;
        const json = await response.json();
        setData(json);
    }

  return (
    <driverContext.Provider value={{data, getData}} >
       {props.children}
    </driverContext.Provider>
  )
}

export default DriversData;
