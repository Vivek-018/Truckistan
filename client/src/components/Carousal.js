import React, { useEffect, useState } from 'react'
import { data } from './data';
import "../style/carousal.css";

const Carousal = () => {
    const [sec, setSec] = useState(0);
    const items = data;

    useEffect(() => {
        const interval = setInterval(() => {
            setSec(sec => sec + 1)
        }, 5000);

        const interO = setInterval(() => {
            setSec(sec => sec = 0)
        }, 15000);

        return () => {
            clearInterval(interval);
            clearInterval(interO);
        }
    }, [])

    return (
        <>
            <div className='images' >
                {items.map((ite, index) => {
                    return (
                        sec === index ?
                            <img src={ite.src} key={index} /> : ""
                    )
                })}
            </div>

            <div className='text-center services ' >
                <h1>Our Goal to Provide Services</h1>
            </div>
        </>
    )
}

export default Carousal