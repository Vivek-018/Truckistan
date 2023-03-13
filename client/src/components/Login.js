import React, { useState } from "react";
import "../style/login.css";
import backimg from "../images/Logo.png";
import logo from "../images/Logo.png";
import { useNavigate, Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handlelogin = async (e) => {
        e.preventDefault();
        const { email, password } = values;
        if (email === "") {
            toast("Please Enter the email", {
                autoClose: 1000,
            })
        } else if (password === "") {
            toast("Please Enter your password", {
                autoClose: 1000,
            })
        } else {
            const data = await fetch(`http://localhost:5000/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            });
            const res = await data.json();
            if (res.status === 201) {
                localStorage.setItem("token", res.token);
                localStorage.setItem("user", JSON.stringify(res.user));
                localStorage.setItem("type", res.user.type);
            }
            if (localStorage.getItem("token")) {
                if (localStorage.getItem("type") === "user") {
                    navigate("/user");
                }
                else if (localStorage.getItem("type") === "Driver") {
                    navigate("/driver");
                } else if (localStorage.getItem("type") === "admin") {
                    navigate("/admin");
                }
            }
            else { navigate("/"); }
        }
    };

    return (
        <>
            <div className="login-container row">
                <div className="left-side col-5">
                    <div className="top-left d-flex align-items-center">
                        <i onClick={() => { navigate("/"); }} className="fa-sharp fa-solid fa-arrow-left"></i>
                        <p className="px-3 m-0">Login</p>
                    </div>
                    <img className="login-img" src={backimg} alt="" />
                    <div className="login-footer">
                        <div className="open-quote">“</div>
                        <div className="quote">
                            Acting is the least mysterious of all crafts. Whenever we want
                            something from somebody or when we want to hide something or
                            pretend, we're acting. Most people do it all day long.
                        </div>
                        <div className="author">marlon brando</div>
                        <div className="close-quote">”</div>
                        <div className="three-dots">
                            <i className="fa-solid fa-circle mx-1"></i>
                            <i className="fa-regular fa-circle mx-1"></i>
                            <i className="fa-regular fa-circle mx-1"></i>
                        </div>
                    </div>
                </div>
                <div className="right-side col-7 d-flex align-items-center justify-content-center">
                    <form
                        onSubmit={handlelogin}
                        action=""
                        className="form-container">
                        <div className=" logotext d-flex justify-content-center" style={{ alignItems: "center" }} >
                            <img src={logo} alt="" className="form-logo web1-logo" />
                            <span>Loadkro</span>
                        </div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="form-control my-2"
                            required
                            onChange={(event) => {
                                setValues((prev) => ({ ...prev, email: event.target.value }));
                            }}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="form-control my-2"
                            required
                            onChange={(event) => {
                                setValues((prev) => ({ ...prev, password: event.target.value }));
                            }}
                        />

                        <button
                            type="submit"
                            className="submit-btn btn btn-lg btn-block my-4"
                        >
                            Login
                        </button>
                        <div className="alternate-option text-center">
                            Don’t have an account{" "}
                            <div className="web1-buttons d-flex flex-column mt-3">
                                <Link to="/signup" state={{ talent: true }}>
                                    <button className="btn btn-talents">
                                        Sign up as Driver
                                    </button>
                                </Link>
                                <Link to="/signup" state={{ talent: false }}>
                                    <button className="btn btn-seekers">
                                        Sign up as User
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <ToastContainer />
        </>
    );
};

export default Login;
