import React, { useContext, useEffect } from 'react'
import driverContext from '../useContext/driverContext'

const OwnerName = ({ OwnerName }) => {
    const context = useContext(driverContext);
    const { UsersDataBYId, UserName } = context;
    console.log(OwnerName.driverId, "Ownername");

    useEffect(() => {
        UsersDataBYId(OwnerName.driverId);
    }, [])

    return (
        <>

            {
                UserName?.map((item, i) => {
                     return(
                        <>
                       { item._id == OwnerName.driverId ?
                            <span key={i} >
                                {item.username}
                            </span>
                        : "Not Available"}
                        </>
                     )
                })
            }
        </>
    )
}

export default OwnerName
