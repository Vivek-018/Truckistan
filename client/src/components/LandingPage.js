import React from "react";
import { Link,  } from "react-router-dom";

import "../style/landingPage.css";
import logo from "../images/Logo.png";
import a1 from "../images/A1.jpg";
import a2 from "../images/A2.jpeg";
import a3 from "../images/A3.jpeg";
import a4 from "../images/A4.jpeg";
import a5 from "../images/A5.png";
import a6 from "../images/A6.jpeg";
import a7 from "../images/A7.jpg";
import a8 from "../images/A8.jpeg";
import a9 from "../images/A9.jpeg";
import a10 from "../images/A10.png";
import a11 from "../images/A11.jpeg";
import a12 from "../images/A12.jpeg";
import a13 from "../images/A13.jpeg";
import a14 from "../images/A14.jpeg";


const Login = () => {
    return (
        <>
            <div className="web1">
                <div className="row">
                    <div className="col-4 col">
                        <div className="web1-signin d-flex flex-column justify-content-between">
                            <div className="menu">
                                <div className="Rectangle-1"></div>
                                <div className="Rectangle-2"></div>
                                <div className="Rectangle-3"></div>
                            </div>
                            <div className=" logotext text-center d-flex justify-content-center " style={{ alignItems: "center" }} >
                                <img
                                    src={logo}
                                    alt="" className="web1-logo" />
                                <span>Loadkro</span>
                            </div>
                            <div className="web1-tagline">One Place for Both Talent and Talent Seeker</div>
                            <div className="web1-buttons d-flex flex-column">
                                <Link to="/signup" state={{ talent: true }} >
                                    <button className="btn btn-talents">Sign up as Driver</button>
                                </Link>
                                <Link to="/signup" state={{ talent: false }}>
                                    <button className="btn btn-seekers">Sign up as User</button>
                                </Link>
                            </div>
                            <div className="alternate-option mt-5 text-center">
                                Already have an account{" "}
                                <Link to="/login">
                                    <b>
                                        <u>Login</u>
                                    </b>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-8 col">
                        <div className="web1-images">
                            <div className="grid-container">
                                <div className="column">
                                    <div className="web1-image">
                                        <img src={a1} />
                                        <div className="image_overlay">
                                            <div className="overlay-name">Rachel Zayne</div>
                                            <div className="overlay-profession">Actress</div>
                                        </div>
                                    </div>
                                    <div className="web1-image">
                                        <img src={a2} />
                                        <div className="image_overlay">
                                            <div className="overlay-name">Rachel Zayne</div>
                                            <div className="overlay-profession">Actress</div>
                                        </div>
                                    </div>
                                    <div className="web1-image">
                                        <img src={a3} />
                                        <div className="image_overlay">
                                            <div className="overlay-name">Rachel Zayne</div>
                                            <div className="overlay-profession">Actress</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="web1-image">
                                        <img src={a4} />
                                        <div className="image_overlay">
                                            <div className="overlay-name">Rachel Zayne</div>
                                            <div className="overlay-profession">Actress</div>
                                        </div>
                                    </div>
                                    <div className="web1-image">
                                        <img src={a5} />
                                        <div className="image_overlay">
                                            <div className="overlay-name">Rachel Zayne</div>
                                            <div className="overlay-profession">Actress</div>
                                        </div>
                                    </div>
                                    <div className="web1-image">
                                        <img src={a6} />
                                        <div className="image_overlay">
                                            <div className="overlay-name">Rachel Zayne</div>
                                            <div className="overlay-profession">Actress</div>
                                        </div>
                                    </div>
                                    <div className="web1-image">
                                        <img src={a7} />
                                        <div className="image_overlay">
                                            <div className="overlay-name">Rachel Zayne</div>
                                            <div className="overlay-profession">Actress</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="web1-image">
                                        <img src={a8} />
                                        <div className="image_overlay">
                                            <div className="overlay-name">Rachel Zayne</div>
                                            <div className="overlay-profession">Actress</div>
                                        </div>
                                    </div>
                                    <div className="web1-image">
                                        <img src={a9} />
                                        <div className="image_overlay">
                                            <div className="overlay-name">Rachel Zayne</div>
                                            <div className="overlay-profession">Actress</div>
                                        </div>
                                    </div>
                                    <div className="web1-image">
                                        <img src={a10} />
                                        <div className="image_overlay">
                                            <div className="overlay-name">Rachel Zayne</div>
                                            <div className="overlay-profession">Actress</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="web1-image">
                                        <img src={a11} />
                                        <div className="image_overlay">
                                            <div className="overlay-name">Rachel Zayne</div>
                                            <div className="overlay-profession">Actress</div>
                                        </div>
                                    </div>
                                    <div className="web1-image">
                                        <img src={a12} />
                                        <div className="image_overlay">
                                            <div className="overlay-name">Rachel Zayne</div>
                                            <div className="overlay-profession">Actress</div>
                                        </div>
                                    </div>
                                    <div className="web1-image">
                                        <img src={a13} />
                                        <div className="image_overlay">
                                            <div className="overlay-name">Rachel Zayne</div>
                                            <div className="overlay-profession">Actress</div>
                                        </div>
                                    </div>
                                    <div className="web1-image">
                                        <img src={a14} />
                                        <div className="image_overlay">
                                            <div className="overlay-name">Rachel Zayne</div>
                                            <div className="overlay-profession">Actress</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
