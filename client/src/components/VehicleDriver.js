import React, { useContext, useEffect } from 'react'
import driverContext from './useContext/driverContext'

const VehicleDriver = ({ item }) => {
    const context = useContext(driverContext);
    const { GetVehicleBy_id, getveh_id } = context;
    
    useEffect(() => {
        GetVehicleBy_id(item.vehicleId);
    }, [])

    return (
        <>
            {/* {
                getveh_id?._id === item.vehicleId ?
                    <> */}
            <td>{getveh_id?.name}</td>
            {/* <td>{getveh_id?.Vnamber}</td> */}
            {/* </>
                    : ""
            } */}
        </>
    )
}

export default VehicleDriver
