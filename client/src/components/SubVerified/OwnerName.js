import React, { useContext, useEffect } from 'react'
import driverContext from '../useContext/driverContext'

const OwnerName = ({ OwnerName }) => {
    const context = useContext(driverContext);
    const { UsersDataBYId, UserName } = context;

    useEffect(() => {
        UsersDataBYId(OwnerName.driverId);
    }, [])

    return (
        <>

            {
                UserName?.map((item, i) => {
                    return (
                        <span key={i} >
                            {item.username}
                        </span>
                    )
                })
            }
        </>
    )
}

export default OwnerName
