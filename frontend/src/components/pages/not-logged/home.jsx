import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className='home-wrapper'>
                    <div className='left-column'>
                        <div className='title'>
                            <h1>Know Your Client Application</h1>
                        </div>
                        
                        <div className='sub-title'>
                            <h3>Discover More <Link to="/about">About Us</Link></h3>
                        </div>
                    </div>
                    
                    <div className='right-column'>
                        <div className='legal-person'>
                            <div className='icon'>
                                <FontAwesomeIcon icon="fa-building" />
                            </div>

                            <div className='text'>
                                <h3>Legal Person</h3>
                            </div>
                        </div>
                        
                        <div className='natural-person'>
                            <div className='icon'>
                                <FontAwesomeIcon icon="fa-user" />
                            </div>

                            <div className='text'>
                                <h3>Natural Person</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}