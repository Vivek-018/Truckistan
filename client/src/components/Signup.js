import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";

import "react-phone-number-input/style.css";
import backimg from "../images/Logo.png";
import logo from "../images/Logo.png";

const Login = () => {
    const navigate = useNavigate();
    const [phone, setPhone] = useState("+911234567890");
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        Rpassword: "",
        type: ""
    });

    const handleSignup = async (e) => {
        e.preventDefault();
        const {username, email, password,type} = values
        const data = await fetch(`http://localhost:5000/user/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password:password,
                phone: phone,
                type: type,
            })
        });
        const res = await data.json();
        console.log(res)
    };

    return (
        <>
            <div className="login-container row">
                <div className="left-side col-5">
                    <div className="top-left d-flex align-items-center">
                        <i onClick={() => { navigate("/"); }} class="fa-sharp fa-solid fa-arrow-left"></i>
                        <p className="px-3 m-0">Signup</p>
                    </div>
                    <img className="login-img w-100 " src={backimg} alt="" />
                    <div className="login-footer">
                        <div className="open-quote">“</div>
                        <div className="quote">
                            I’m a 21st century man. I don’t belive in magic. I belive in sweat, tears, life and death.
                        </div>
                        <div className="author">kamal haasan</div>
                        <div className="close-quote">”</div>
                        <div className="three-dots">
                            <i className="fa-solid fa-circle mx-1"></i>
                            <i className="fa-regular fa-circle mx-1"></i>
                            <i className="fa-regular fa-circle mx-1"></i>
                        </div>
                    </div>
                </div>
                <div className="right-side col-7 d-flex align-items-center justify-content-center">
                    {/* Signup Form */}
                    <form onSubmit={handleSignup} className="form-container" id="signup-form">
                        <div className=" logotext d-flex justify-content-center" style={{ alignItems: "center" }} >
                            <img src={logo} alt="" className="form-logo web1-logo" />
                            <span>Loadkro</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Enter Full Name"
                            className="form-control my-2"
                            label="Name"
                            onChange={(event) => {
                                setValues((prev) => ({ ...prev, username: event.target.value }));
                            }}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control my-2"
                            label="Email"
                            onChange={(event) => {
                                setValues((prev) => ({ ...prev, email: event.target.value }));
                            }}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-control my-2"
                            label="Password"
                            onChange={(event) => {
                                setValues((prev) => ({ ...prev,  password: event.target.value }));
                            }}
                        />
                        <input
                            type="password"
                            placeholder="Re-enter Password"
                            className="form-control my-2"
                            onChange={(event) => {
                                setValues((prev) => ({ ...prev, Rpassword: event.target.value }));
                            }}
                        />
                        <PhoneInput
                            className="form-control"
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={setPhone}
                            defaultCountry=""
                        />
                        <div style={{ position: "relative", display: "flex" }}>
                            <select className="form-control my-2" 
                            // name="type"
                            //   value={values.type}
                            onChange={(event) => {
                                setValues((prev) => ({ ...prev, type: event.target.value }));
                            }}
                             >
                                <option value="Driver" >Driver</option>
                                <option value="user">User</option>
                            </select>
                            <div
                                style={{
                                    position: "absolute",
                                    right: "15px",
                                    top: "0",
                                    bottom: "0",
                                    display: "flex",
                                    alignItems: "center",
                                    color: "lightgrey",
                                }}
                            >
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                        <b>{''}</b>
                        <input type="submit" className="submit-btn btn btn-lg btn-block my-2" value="Signup" />

                        <div className="alternate-option my-3 text-center">
                            Already have an account{" "}
                            <a href="login">
                                <b>
                                    <u>Login</u>
                                </b>
                            </a>
                        </div>
                    </form>
                    <div id="recaptcha-container"></div>
                </div>
            </div>
        </>
    );
};

export default Login;
