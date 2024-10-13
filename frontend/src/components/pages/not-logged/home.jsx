import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className='home-wrapper'>
                    <div className='left-column'>
                        <h2>Know Your Client Application</h2>
                        
                        <div>
                            Discover More <Link to="/about">About Us</Link>
                        </div>
                    </div>
                    
                    <div className='right-column'>
                        <div className='legal-person'>
                            <div className='icon'>
                                <FontAwesomeIcon icon="fa-building" />
                            </div>

                            <div className='text'>
                                Legal Person
                            </div>
                        </div>
                        
                        <div className='natural-person'>
                            <div className='icon'>
                                <FontAwesomeIcon icon="fa-user" />
                            </div>

                            <div className='text'>
                                Natural Person
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}