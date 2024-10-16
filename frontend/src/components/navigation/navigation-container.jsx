import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../assets/logo-transparent.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default class NavigationContainer extends Component {
    render() {
        return (
            <div className='nav-wrapper'>
                <div className='left-side'>

                    <div className='logo'>
                        <img src={logo} width={60} height={60} />
                    </div>

                    <div className='links'>
                        <div className="nav-link-wrapper">
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </div>

                        <div className="nav-link-wrapper">
                            <NavLink to="/about">
                                About
                            </NavLink>
                        </div>

                        <div className="nav-link-wrapper">
                            <NavLink to="/contact">
                                Contact
                            </NavLink>
                        </div>


                        {/*Temporary*/}
                        <div className="nav-link-wrapper">
                            <NavLink to="/dashboard">
                                Dashboard
                            </NavLink>
                        </div>

                        <div className="nav-link-wrapper">
                            <NavLink to="/checker">
                                Checker
                            </NavLink>
                        </div>

                        <div className="nav-link-wrapper">
                            <NavLink to="/clients">
                                Clients
                            </NavLink>
                        </div>
                        
                        <div className="nav-link-wrapper">
                            <NavLink to="/new-client">
                                New Client
                            </NavLink>
                        </div>

                        { false ? <button>Dashboard</button> : null }
                        { false ? <button>Clients</button> : null }
                        { false ? <button>New Client</button> : null }
                    </div>
                </div>

                <div className='right-side'>
                    <div className="nav-link-wrapper">
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </div>

                    <div className='icon'>
                        <FontAwesomeIcon icon="fa-right-to-bracket" />
                    </div>
                </div>
                
            </div>
        );
    }
}