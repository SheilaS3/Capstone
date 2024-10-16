import React, { Component } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className='contact-wrapper'>
                    <div className='left-column'>                       
                        <div className='slogan'>
                            Let's change <b>the way we <span style={{color: "#04b39d"}}>KYC</span></b>. 
                        </div>
                    </div>
                    
                    <div className='right-column'>
                       <div className='contact-title'>
                            <h1>CONTACT US FOR MORE INFO</h1>
                       </div>

                       <div className='phone'>
                            <div className='icon'>
                                <FontAwesomeIcon icon="fa-phone" />
                            </div>

                            <div className='text'>
                                123 - 456 -789
                            </div>
                       </div>

                       <div className='email'>
                            <div className='icon'>
                                <FontAwesomeIcon icon="fa-envelope" />
                            </div>

                            <div className='text'>
                                aml@kyc.com
                            </div>
                       </div>
                    </div>
                </div>
            </div>
        );
    }
}