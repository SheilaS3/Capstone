import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Login extends Component {
    render() {
        return (
            <div>
            <h1>LOGIN TO YOUR ACCOUNT</h1>

            <form className="login-form-wrapper">
                <div className="form-group">
                    <FontAwesomeIcon icon="envelope" />

                    <input 
                        type="email"
                        name="email"
                        placeholder="Your email"
                    />
                </div>

                <div className="form-group">
                    <FontAwesomeIcon icon="lock" />

                    <input 
                        type="password"
                        name="password"
                        placeholder="Your password"
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