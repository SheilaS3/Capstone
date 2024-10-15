import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Login extends Component {
    render() {
        return (
            <div className='login-wrapper'>
                <div className='title'>
                    <h1>LOGIN TO YOUR ACCOUNT</h1>
                </div>

                <form className="login-form-wrapper">
                    <div className="form-group">
                        <FontAwesomeIcon icon="envelope" />

                        <input 
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                    </div>

                    <div className="form-group">
                        <FontAwesomeIcon icon="lock" />

                        <input 
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                    </div>

                    <button className="btn" type="submit">
                        Login
                    </button>
                </form>                    
            </div>
        );
    }
}