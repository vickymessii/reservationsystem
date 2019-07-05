import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from 'react-router-dom';

const Navbar = ()=>(
    <div>
    <div className="header-top">
                <div className="header-top-left">
                    <span><i className="ion-android-cloud-outline"></i>18 °C</span>
                    <span><i className="ion-ios-location-outline"></i> 121 King Str, Melbourne Victoria</span>
                    <span><i className="fa fa-phone" aria-hidden="true"></i> 1-548-854-8898</span>
                </div>
                <div className="header-top-right">
                <Link to="/login" className="nav-link right">Login</Link>
                </div>
                {/* <div className="header-top-right">
                    <ul className="navbar-nav">
                        <li className="dropdown"><a href="login.html" title="LOGIN" className="dropdown-toggle">LOGIN</a></li>
                        <li className="dropdown"><a href="register.html" title="REGISTER" className="dropdown-toggle">REGISTER</a></li>

                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">USD <b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <li className="active"><a href="#">USD</a></li>
                                <li><a href="#">EUR</a></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">ENG <b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <li className="active"><a href="#">ENG</a></li>
                                <li><a href="#">JP</a></li>
                            </ul>
                        </li>
                    </ul>
                </div> */}
            </div>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<a className="navbar-brand" href="#">RS</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
          <Link to="/home" className="nav-link">Home</Link>
        {/* <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a> */}
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Flights</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Hotels</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Rentals</a>
      </li>
      {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
      {/* <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
    {/* <Link to="/login" className="nav-link">Login</Link> */}
    {/* <span className="navbar-text">
      Navbar text with an inline element
    </span> */}
    </div>
 </nav>
 </div>
);

export default Navbar;
