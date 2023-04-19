import React, { useContext, useEffect } from 'react'
import driverContext from './useContext/driverContext'


const Status = ({ id }) => {
    const context = useContext(driverContext);
    const { getbookedVehicles, booked } = context;

    useEffect(() => {
        getbookedVehicles();
    }, [])

    return (
        <>

            <div style={{ fontSize: ".7rem" }} >
                {
                    booked?.map((item, i) => {
                        return (
                            id === item.vehicleId ?
                                "durgesh" : ""
                        )
                    })}
            </div>
        </>
    )
}

export default Status
