import React from 'react'
import Navbar from './Navbar'
import '../style/cart.css'
import Footer from './Footer';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const currencies = [
    {
        value: '1',
        label: 'Choose',
    },
    {
        value: '2',
        label: 'Bussiness',
    },
    {
        value: '3',
        label: 'Personal',
    },
];

const Cart = () => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='bookedD' >
                    <div className='headline text-center'>
                        <h2>We needs some details for Your bookings </h2>
                    </div>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '40ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <div className='container formfields '>
                            <form >
                                <div className='inputs'>
                                    <div className="form-group p-3 ">
                                        <label>From</label>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Pickup Address"
                                        />
                                    </div>

                                    <div className="form-group p-3 ">
                                        <label>To</label>
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="DropOff Address"
                                        />
                                    </div>

                                    <div className="form-group p-3 ">
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="City"
                                        />
                                    </div>
                                    
                                    <div className="form-group p-3 ">
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="City"
                                        />
                                    </div>

                                    <div className="form-group p-3 ">
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Pin code"
                                        />
                                    </div>

                                    <div className="form-group p-3 ">
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Pincode"
                                        />
                                    </div>

                                    <div className="form-group p-3 ">
                                        <TextField
                                            id="outlined-required"
                                            label="Name (Optional) "
                                        />
                                    </div>
                                    <div className="form-group p-3 ">
                                        <TextField
                                            required
                                            id="outlined-required"
                                            label="Phone Number"
                                        />
                                    </div>

                                    <div className="form-group p-3 ">
                                        <TextField
                                            id="outlined-select-currency-native"
                                            select
                                            label="Choose Your Requirements"
                                            defaultValue="EUR"
                                            SelectProps={{
                                                native: true,
                                            }}
                                        // helperText="Please select your currency"
                                        >
                                            {currencies.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                    </div>

                                </div>

                                <div className='formbutton text-center my-4'>
                                    <Link to={'/vehicledetails'} type="submit" className="btn-sub">Submit</Link>
                                </div>
                            </form>
                        </div>
                    </Box>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Cart
