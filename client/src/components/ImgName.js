import React, { useEffect, useState } from 'react'
import photo from '../images/Logo.png';
import axios from 'axios';

const ImgName = ({ data }) => {
    const adminhost = "http://localhost:5000/admin"
    const [user, setUser] = useState();

    const handleUserDetails = async (id) => {
        try {
            const res = await axios.get(`${adminhost}/UserDataAtAdmin/${data}`)
            setUser(res.data)
            return Promise.resolve(res);
        } catch (error) {
            return Promise.reject({ error })
        }
    }

    useEffect(() => {
        handleUserDetails();
    }, [])

    return (
        <>
            {
                user?.length === 0 || user === undefined ? <div class="Imgloader"></div> :
                    user?.map((item, i) => {
                        return (
                            <>
                                <img src={item.link} alt='img' /><br />
                                <span>By: {item.username}</span>
                            </>
                        )
                    })
            }
        </>
    )
}

export default ImgName
