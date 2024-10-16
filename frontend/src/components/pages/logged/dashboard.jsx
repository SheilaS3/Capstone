import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard-wrapper'>
                <Link
                    className='link' 
                    to="/clients"
                >
                    <h1>CLIENTS</h1>
                </Link>

                <Link 
                    className='link'
                    to="/checker"
                >
                    <h1>CHECKER</h1>
                </Link>

                <Link
                    className='link'
                    to="/new-client"
                >
                    <h1>NEW CLIENT</h1>
                </Link>
            </div>
        );
    }
}